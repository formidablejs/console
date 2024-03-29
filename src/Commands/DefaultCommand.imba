import GlobalOptions from '../GlobalOptions'
import Command from '../Command'
import Prop from '../Prop'
import Output from '../Output'
import Similar from '../Utils/Similar'
import Prompt from '../Utils/Prompt'

export default class DefaultCommand < Command

	# A list of registered commands.
	prop commands\object = {}

	# Application name.
	prop name\string

	# Application version (semver).
	prop version\string

	# A list of help options.
	get helpOptions\Array<object>
		[
			{
				alias: 'h'
				name: 'help'
				description: 'Display help for the given command. When no command is given, a list of all commands will be displayed'
			}
			{
				alias: 'V'
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
			{
				alias: { v: 1, vv: 2, vvv: 3 }
				name: 'verbose'
				description: 'Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug'
			}
		]

	# Register as a default command.
	get default\boolean
		true

	# The name and signature of the console command.
	get signature\string
		'default {?--help} {?--version} {?--no-ansi} {?--no-interaction} {?--verbose}'

	# Command props.
	get props\object
		{
			help: Prop.boolean!.alias('h').default(false)
			version: Prop.boolean!.alias('V').default(false)
			verbose: Prop.boolean!.alias({v: 1, vv: 2, vvv: 3}).default(true)
			'no-ansi': Prop.boolean!.default(false)
			'no-interaction': Prop.boolean!.default(false)
		}

	# Set application name.
	def setName\DefaultCommand name\string
		self.name = name

		self

	# Set application version.
	def setVersion\DefaultCommand version\string
		self.version = version

		self

	# Set registered commands.
	def registered\DefaultCommand commands\Command[]
		self.commands = commands

		self

	def displayHelp commands\Array, length\number, namespace\string|null = null
		let display = []

		self.helpOptions.forEach do(option)
			let alias = option.alias

			if typeof option.alias === 'object' && !Array.isArray(option.alias) && option.alias
				alias = Object.keys(option.alias).join('|')

			const name = (option.alias ? "-{alias}, " : '    ') + ("--{option.name}") + (option.type && option.type == String ? "[={option.name.toUpperCase!}]" : '')

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
<fg:green>Available commands{namespace ? ' for the \"' + namespace + '\" namespace' : ''}:</fg:green>
"

		let previous = ''

		commands.forEach do(command)
			if previous !== command.group
				self.write " <fg:green>{command.group}</fg:green>"

			previous = command.group

			length - command.name.length

			self.write "  <fg:green>{command.name}  {' '.repeat(length - command.name.length)}</fg:green>{command.description}"

	# Display command help.
	def displayCommandHelp command\Command
		const options = command.opts!.map(do(opt)
			{
				alias: opt.alias
				name: opt.name
				description: opt.description && typeof opt.description == 'string' ? opt.description.trim! : null
				type: opt.type
				default: opt.default
				allowed: opt.prop && Array.isArray(opt.prop.allowed) ? opt.prop.allowed : null
				allowsMany: opt.prop && opt.prop.allowsMany
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

			let alias = option.alias

			if typeof option.alias === 'object' && !Array.isArray(option.alias) && option.alias
				alias = Object.keys(option.alias).join('|')

			const name = (option.alias ? "-{alias}, " : '    ') + ("--{option.name}") + (option.type && option.type == String ? "{(allowed ? "=[{allowed}]" : "[={option.name.toUpperCase!}]")}" : '')

			if name then length = name.length > length ? name.length : length

			const description = (option.description ? "{option.description} " : '') + (option.default ? "<fg:green>[default: \"{option.default}\"]</fg:green>" : '') + (option.allowsMany ? "<fg:green>[multiple]</fg:green>" : '')

			display.push { name, description }

		args.forEach do(arg)
			if arg then length = arg.name.length > length ? arg.name.length : length

		if command.description
			self.write "
<fg:green>Description:</fg:green>\n
  {command.description ?? ''}\n"

		self.write "
<fg:green>Usage:</fg:green>\n
  {command.getName!} [options] {args.length > 0 ? '[' + args.map(do(arg) (!arg.required ? '<dim>' + '<' + arg.name + '>' + '</dim>' : '<' + arg.name + '>')).join(', ') + ']' : ''}\n"

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

	# Display cli version.
	def displayVersion
		self.write "{self.name} <fg:green>{self.version}</fg:green>"

	# Execute the console command.
	def handle
		let command\Command = self.commands[self.options.name]

		let   help\boolean          = self.option 'help'
		const quiet\boolean         = self.option 'quiet', false
		const noInteraction\boolean = self.option 'no-interaction', false
		const env\string|null       = self.option 'env'
		const noAnsi\boolean        = self.option 'no-ansi', false
		let   verbose\number        = 1
		const similarCommands\Array = []

		const verboseOption = this._incoming.opts.filter(do(opt)
			opt.name == 'verbose'
		)[0]

		if verboseOption && verboseOption.received
			verbose = verboseOption.received.length - 1

		if noAnsi then Output.noAnsi = true

		if !help && !self.options.name then help = true

		if !command && self.options.name
			const all = Object.keys(self.commands)

			# if self.option('no-interaction') != true
			# 	let asked = false

			# 	for c in all
			# 		if Similar(self.options.name, c) >= 70 && asked == false
			# 			asked = true

			# 			const response = await Prompt("Did you mean \"{c}\"?")

			# 			if response == true
			# 				command = self.commands[c]
			# 				self.options.name = c

			# 			break

			Object.keys(self.commands).forEach do(current)
				similarCommands.push current if current.startsWith("{self.options.name}:")

			if !command && similarCommands.length == 0
				self.error "Command \"{self.options.name}\" is not defined."

		if !command && self.options.options.length > 0
			const required = self.opts!.filter(do(opt) opt.required).map do(opt) '"--' + opt.name + '"'

			self.options.options.forEach do(option)
				if !['help', 'version', 'h', 'V', 'v', 'vv', 'vvv', 'verbose', 'no-ansi'].includes(option.name)
					const expected\string = required.length > 0 ? ", expected {required.length > 1 ? 'options' : 'option'} {required.join(', ')}" : ''

					self.error "Unexpected option {option.assessor}{option.name}{expected}"

		if self.option('version')
			self.displayVersion!

			return 0

		if (!self.options.name && help) || similarCommands.length > 0
			let all\Array = []
			let groups\Array = []
			let length\number = 20
			let allowed\Array = similarCommands.length > 0 ? similarCommands : Object.keys(self.commands)

			Object.keys(self.commands).forEach do(command)
				if self.commands[command].getName() !== 'default' && allowed.includes(command)
					const group\string = similarCommands.length > 0 ? '' : (self.commands[command].getGroup! ?? '')
					const name\string = self.commands[command].getName!
					const description\string = self.commands[command].description ?? ''

					if name then length = name.length > length ? name.length : length

					group == '' ? (all.push { group, name, description }) : groups.push { group, name, description }

			all = all.sort do(a, b) a.name.localeCompare(b.name)
			groups = groups.sort do(a, b) a.name.localeCompare(b.name)

			self.displayHelp all.concat(groups), length, similarCommands.length > 0 ? self.options.name : null

			return 0

		if self.options.name && help
			self.displayCommandHelp command

			return 0

		if self.options.name && (help || quiet || noInteraction || env || noAnsi || verbose)
			return new GlobalOptions help, quiet, noInteraction, env, noAnsi, verbose

		if self.options.name then return 1

		0
