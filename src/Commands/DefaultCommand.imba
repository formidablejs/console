import GlobalOptions from '../GlobalOptions'
import Command from '../Command'
import Prop from '../Prop'
import Output from '../Output'

export default class DefaultCommand < Command

	/**
	 * A list of registered commands.
	 *
	 * @type {Object}
	 */
	prop commands\Object = {}

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
	 * A list of help options.
	 *
	 * @type {{}[]}
	 */
	get helpOptions
		[
			{
				alias: 'h'
				name: 'help'
				description: 'Display help for the given command. When no command is given display help for the <fg:green>list</fg:green> command'
			}
			{
				alias: 'v'
				name: 'version'
				description: 'Display this application version'
			}
			{
				name: 'no-ansi'
				description: 'Disable ANSI output'
			}
			{
				name: 'no-interaction'
				description: 'Do not ask any interactive question'
			}
		]

	/**
	 * Register as a default command.
	 *
	 * @type {Boolean}
	 */
	get default
		true

	/**
	 * The name and signature of the console command.
	 *
	 * @type {String}
	 */
	get signature
		'default {?--help} {?--version} {?--no-ansi} {?--no-interaction}'

	/**
	 * Command props.
	 *
	 * @type {Object}
	 */
	get props
		{
			help: Prop.boolean!.alias('h').default(false)
			version: Prop.boolean!.alias('v').default(false)
			'no-ansi': Prop.boolean!.default(false)
			'no-interaction': Prop.boolean!.default(false)
		}

	/**
	 * Set application name.
	 *
	 * @param {String} name
	 * @returns {DefaultCommand}
	 */
	def setName name\String
		self.name = name

		self

	/**
	 * Set application version.
	 *
	 * @param {String} version
	 * @returns {DefaultCommand}
	 */
	def setVersion version\String
		self.version = version

		self

	/**
	 * Set registered commands.
	 *
	 * @param {String} version
	 * @returns {DefaultCommand}
	 */
	def registered commands\Command[]
		self.commands = commands

		self

	def displayHelp commands\Array, length\Number
		let display = []

		self.helpOptions.forEach do(option)
			const name = (option.alias ? "-{option.alias}, " : '    ') + ("--{option.name}") + (option.type && option.type == String ? "[={option.name.toUpperCase!}]" : '')

			if name then length = name.length > length ? name.length : length

			const description = (option.description ? "{option.description} " : '') + (option.default ? "<fg:green>[default: {option.default}]</fg:green>" : '')

			display.push { name, description }

		self.write "
{self.name} <fg:green>{self.version}</fg:green>\n\n

<fg:green>Usage:</fg:green>\n
  command [options] [arguments]\n\n

<fg:green>Options:</fg:green>"

		display.forEach do(option)
			self.write "  <fg:green>{option.name}</fg:green>  {' '.repeat(length - option.name.length)}{option.description ?? ''}"

		if !(commands.length > 0) then return

		self.write "\n
<fg:green>Available commands:</fg:green>
"

		let previous = ''

		commands.forEach do(command)
			if previous !== command.group
				self.write " <fg:green>{command.group}</fg:green>"

			previous = command.group

			length - command.name.length

			self.write "  <fg:green>{command.name}  {' '.repeat(length - command.name.length)}</fg:green>{command.description}"

	def displayCommandHelp command\Command
		const options = command.opts!.map(do(opt)
			{
				alias: opt.alias
				name: opt.name
				description: opt.description && typeof opt.description == 'string' ? opt.description.trim! : null
				type: opt.type
				default: opt.default
				allowed: opt.prop && Array.isArray(opt.prop.allowed) ? opt.prop.allowed : null
				multiple: opt.prop && opt.prop.multiple
			}
		).concat(self.helpOptions)

		const args = command.args!.map do(arg) {
			name: arg.name
			description: arg.description
			required: arg.required
		}

		let length = 20
		let display = []

		options.forEach do(option)
			const allowed = Array.isArray(option.allowed) ? option.allowed.join('|') : null

			const name = (option.alias ? "-{option.alias}, " : '    ') + ("--{option.name}") + (option.type && option.type == String ? "{(allowed ? "=[{allowed}]" : "[={option.name.toUpperCase!}]")}" : '')

			if name then length = name.length > length ? name.length : length

			const description = (option.description ? "{option.description} " : '') + (option.default ? "<fg:green>[default: \"{option.default}\"]</fg:green>" : '') + (option.multiple ? "<fg:green>[multiple]</fg:green>" : '')

			display.push { name, description }

		args.forEach do(arg)
			if arg then length = arg.name.length > length ? arg.name.length : length

		if command.description
			self.write "
<fg:green>Description:</fg:green>\n
  {command.description ?? ''}\n"

		self.write "
<fg:green>Usage:</fg:green>\n
  {command.getName!} [options] {args.length > 0 ? '-- ' + '[' + args.map(do(arg) (!arg.required ? '<dim>' + '<' + arg.name + '>' + '</dim>' : '<' + arg.name + '>')).join(', ') + ']' : ''}\n"

		if args.length > 0
			self.write "
<fg:green>Arguments:</fg:green>"

			args.forEach do(option)
				self.write "  <fg:green>{option.name}</fg:green>  {' '.repeat(length - option.name.length)}{option.description ?? ''}"

			self.write ''

		self.write "
<fg:green>Options:</fg:green>"

		display.forEach do(option)
			self.write "  <fg:green>{option.name}</fg:green>  {' '.repeat(length - option.name.length)}{option.description ?? ''}"

	def displayVersion
		self.write "{self.name} <fg:green>{self.version}</fg:green>"

	/**
	 * Execute the console command.
	 *
	 * @returns {mixed}
	 */
	def handle
		const command\Command = self.commands[self.options.name]

		let help\Boolean = self.option 'help'
		const quiet\Boolean = self.option 'quiet', false
		const noInteraction\Boolean = self.option 'no-interaction', false
		const env\String|null = self.option 'env'
		const noAnsi\Boolean = self.option 'no-ansi', false

		if noAnsi then Output.noAnsi = true

		if !help && !self.options.name then help = true

		if !command && self.options.options.length > 0
			const required = self.opts!.filter(do(opt) opt.required).map do(opt) '"--' + opt.name + '"'

			self.options.options.forEach do(option)
				if !['help', 'h', 'quiet', 'q', 'no-interaction', 'n', 'env', 'no-ansi'].includes(option.name)
					const expected\String = required.length > 0 ? ", expected {required.length > 1 ? 'options' : 'option'} {required.join(', ')}" : ''

					self.error "Unexpected option {option.assessor}{option.name}{expected}"

		if !command && self.options.name
			self.error "Command \"{self.options.name}\" is not defined."

		if self.option('version')
			self.displayVersion!

			return 0

		if !self.options.name && help
			let groups\Array = []
			let length\Number = 20

			Object.keys(self.commands).forEach do(command)
				if self.commands[command].getName() !== 'default'
					const group\String = self.commands[command].getGroup! ?? ''
					const name\String = self.commands[command].getName!
					const description\String = self.commands[command].description ?? ''

					if name then length = name.length > length ? name.length : length

					groups.push { group, name, description }

			groups = groups.sort do(a, b) a.group == '' ? -1 : a.group.localeCompare(b.group)

			self.displayHelp groups, length

			return 0

		if self.options.name && help
			self.displayCommandHelp command

			return 0

		if self.options.name && (help || quiet || noInteraction || env || noAnsi)
			return new GlobalOptions help, quiet, noInteraction, env, noAnsi

		if self.options.name then return 1

		0
