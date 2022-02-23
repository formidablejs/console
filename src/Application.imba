import literal from './Utils/literal'
import Signature from './Utils/Signature'
import DefaultCommand from './Commands/DefaultCommand'
import Command from './Command'
import GlobalOptions from './GlobalOptions'
import Output from './Output'
import type CommandOptions from './Types/CommandOptions'

export default class Application

	/**
	 * A list of registered commands.
	 *
	 * @type {Array}
	 */
	prop commands\Array = []

	/**
	 * Default command.
	 *
	 * @type {DefaultCommand}
	 */
	prop defaultCommand\DefaultCommand

	/**
	 * Accessible commands.
	 *
	 * @type {Object}
	 */
	prop accessible\Object = {}

	/**
	 * Application name
	 *
	 * @type {String}
	 */
	prop name\String

	/**
	 * Application version (semver).
	 *
	 * @type {String}
	 */
	prop version\String

	/**
	 * Custom signature.
	 *
	 * @type {String|null}
	 */
	prop signature\String

	/**
	 * Instantiate console
	 *
	 * @param {String} name
	 * @param {String} version
	 */
	def constructor name\String, version\String|null = '1.0'
		self.name = name
		self.version = version

	/**
	 * Register a new command.
	 *
	 * @param {Function} command
	 * @returns {Application}
	 */
	def register command\Function
		self.commands.push command

		self

	/**
	 * Get incoming command options.
	 *
	 * @returns {CommandOptions}
	 */
	def options
		const args\String[] = signature ? signature.split ' ' : process.argv.slice 2

		const command\CommandOptions = { name: null, arguments: [], options: [] }

		for argument, position in args
			if argument.startsWith '-'
				const name = argument.split('=')[0].slice(argument.startsWith('--') ? 2 : 1)
				const value = argument.includes('=') ? argument.split('=')[1] : true
				const assessor = argument.startsWith('--') ? '--' : '-'

				if command.options.some(do(option) option.name == name) && ![true, false].includes(literal(value))
					command.options.forEach do(option, position)
						const previous\String = command.options[position].value

						command.options[position].value = Array.isArray(previous) ? previous.concat([value]) : [previous, value]

				else
					command.options.push { name, value, assessor }
			else
				if position == 0
					command.name = argument.trim!
				else
					command.arguments.push argument

		command

	def run signature\String|null = null
		if signature && typeof signature == 'string'
			self.signature = signature

		self.register DefaultCommand

		for registeredCommand in self.commands
			if !(registeredCommand.prototype instanceof Command) then throw new Error 'Invalid Command'

			const command = new registeredCommand

			if command.default
				self.defaultCommand = command
			else
				self.accessible = Object.assign self.accessible, { [command.getName!]: command }

		let options\CommandOptions = self.options!

		const results\GlobalOptions|number = self.defaultCommand
			.setName(self.name)
			.setVersion(self.version)
			.registered(self.accessible)
			.run(options)

		if results == 0 then return

		if results instanceof GlobalOptions
			self.signature = results.incoming.join(' ')

			options\CommandOptions = self.options!

		const command\Command = self.accessible[options.name]

		command.run options

