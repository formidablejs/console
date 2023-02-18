import literal from './Utils/literal'
import Signature from './Utils/Signature'
import DefaultCommand from './Commands/DefaultCommand'
import Command from './Command'
import GlobalOptions from './GlobalOptions'
import Output from './Output'
import type CommandOptions from './Types/CommandOptions'

export default class Application

	# A list of registered commands.
	prop commands\Array = []

	# Default command.
	prop defaultCommand\DefaultCommand

	# Exit protocol.
	prop #silentExit\boolean = false

	# Internal command.
	prop #internal\boolean = false

	# Accessible commands.
	prop accessible\object = {}

	# Application name.
	prop name\string

	# Application version (semver).
	prop version\string

	# Custom signature.
	prop signature\string

	# Raw signatire
	prop raw\Array<string|number>

	# Application events.
	prop #applicationEvents\Function[] = []

	# onDefaultCommand events.
	prop #onDefaultCommandEvents\Function[] = []

	# Instantiate console.
	def constructor name\string, version\string|null = '1.0'
		self.name = name
		self.version = version

	# Register a new command.
	def register\Application command\Function
		self.commands.push command

		self

	# Get incoming command options.
	def options\CommandOptions
		let args\string[] = []

		if #internal
			args = signature ? signature.match(/([^\s"]+|"[^"]*")+/g) : process.argv.slice 2

		else
			args = raw ? raw : process.argv.slice 2

		const command\CommandOptions = { name: null, arguments: [], options: [], recieved: '' }

		for argument, position in args
			if argument.startsWith '-'
				const name     = argument.split('=')[0].slice(argument.startsWith('--') ? 2 : 1)
				const value    = argument.includes('=') ? argument.split('=')[1] : true
				const assessor = argument.startsWith('--') ? '--' : '-'

				if command.options.some(do(option) option.name == name) && ![true, false].includes(literal(value))
					command.options.forEach do(option, position)
						const previous\string = command.options[position].value

						command.options[position].value    = Array.isArray(previous) ? previous.concat([value]) : [previous, value]
						command.options[position].received = argument

				else
					command.options.push { name, value, assessor, received: argument }
			else
				if position == 0
					command.name = argument.trim!
				else
					command.arguments.push argument
					command.received = argument

		command

	def onDefaultCommand\Application callback\Function
		self.#onDefaultCommandEvents.push callback

		self

	def onEvent\Application event\string, callback\Function
		self.#applicationEvents.push { event, callback }

		self

	def run signature\string|null = null
		if signature && typeof signature == 'string'
			self.#silentExit = true
			self.#internal = true
			self.signature = signature

		self.register DefaultCommand

		for registeredCommand in self.commands
			if !(registeredCommand.prototype instanceof Command) then throw new Error 'Invalid Command'

			const command = new registeredCommand

			if command.default && self.defaultCommand === undefined
				self.defaultCommand = command
			else
				self.accessible = Object.assign self.accessible, { [command.getName!]: command }

		let options\CommandOptions = self.options!

		const results\GlobalOptions|number = await self.defaultCommand
			.setName(self.name)
			.setVersion(self.version)
			.registered(self.accessible)
			.run(options)

		if results == 0
			for event in self.#onDefaultCommandEvents
				event(options)

			return

		if options.name
			for registered in self.#applicationEvents.filter(do(event) event.event == "pre-{options.name}")
				registered.callback(options)

		if results instanceof GlobalOptions
			if !self.signature
				self.signature = results.incoming.join(' ')

			if !self.raw
				self.raw = results.incoming

			options\CommandOptions = self.options!

		const command\Command = self.accessible[options.name]

		if self.#silentExit
			command.silentExit = true

		if self.#internal
			command.internal = true

		await command.run options, results instanceof GlobalOptions ? results : undefined

		if options.name
			for registered in self.#applicationEvents.filter(do(event) event.event == options.name)
				registered.callback(options, results)
