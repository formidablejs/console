import Output from '../Output'
import type Command from '../Command'
import type CommandOptions from '../Types/CommandOptions'
import type CommandOption from '../Types/CommandOption'

export default class Signature

	static def raw command\Command
		const args\string[] = command.signature.match(/\{(.*?)\}/g) || []

		const filtered = []

		for argument, position in args
			let name\string = argument.split(':')[0].slice(1).trim!
			const description\string = argument.includes(':') ? argument.substring(argument.indexOf(':')).slice(1).slice(0, -1).trim! : null
			const required\boolean = !name.startsWith '?'
			let type\any = name.includes('=') ? String : Boolean
			let flag = 'argument'

			if !(name.startsWith('--') || name.startsWith('?--'))
				if name.startsWith('?') then name = name.slice(1)

				type = 'any'

			else if name.startsWith('--') || name.startsWith('?--')
				if name.startsWith('--') then name = name.slice(2)
				if name.startsWith('?--') then name = name.slice(3)
				flag = 'option'

			let default = (name.includes('=') ? name.substring(name.indexOf('=')) : '')

			if default.endsWith('}') then default = default.slice(0, -1)
			if default.startsWith('=') then default = default.slice(1)

			name = name.endsWith('}') ? name.slice(0, -1).split('=')[0] : name.split('=')[0]

			filtered.push {
				position: position
				name: name
				default: command.props[name]?.defaultValue ?? (default.trim! == '' ? null : default.trim!)
				description: command.props[name]?.propDescription ?? description
				type: command.props[name]?.type ?? type
				required: command.props[name]?.required ?? required
				flag: flag
				alias: command.props[name]?.propAlias ?? null
				prop: command.props[name]
			}

		filtered

	static def get command\Command, type\string, name\string, default\any
		let results = command._incoming[type].filter do(i) i.name == name

		let output = results.length == 1 && (results[0].value !== null && results[0].value !== undefined) ? results[0].value : (results[0]?.default !== null ? results[0]?.default : default)

		if results.length == 1 && (results[0].prop && results[0].prop.allowsMany !== true) && Array.isArray(output) then return output.slice(-1)[0]

		if !output && ([false, true].includes results[0]?.default) then output = results[0]?.default

		output

	static def checkRequiredArguments command\Command, options\CommandOptions
		const requiredArgs = command.args!.filter(do(arg) arg.required).length

		if requiredArgs > options.arguments.length
			const missing = command.args!.filter(do(arg) arg.required).splice(command.options.arguments.length).map do(arg) '"' + arg.name + '"'

			command.error "Not enough arguments: (missing: {missing.join(', ')})."

	static def resolveArguments command\Command, options\CommandOptions
		options.arguments.forEach do(argument, position)
			if command.default && !command._incoming.args[position] then return

			if !command._incoming.args[position]
				const required = command.args!.filter(do(arg) arg.required).map do(arg) '"' + arg.name + '"'

				command.error "Too many arguments to \"{command.getName!}\" command" + (required.length > 0 ? ", expected {required.length > 1 ? 'arguments' : 'argument'} {required.join(', ')}" : '')

			const expectedType = command._incoming.args[position].type
			const typeReceived = !isNaN(argument) ? Number : String

			if expectedType !== 'any' && expectedType.name !== typeReceived.name
				const name = command._incoming.args[position].name

				command.error "Got {typeReceived.name} to \"{name}\" argument, expected {expectedType.name}"

			if command._incoming.args[position]?.prop && command._incoming.args[position].prop.validate
				const results = command._incoming.args[position].prop.validate(
					command.getName!,
					command._incoming.args[position].name,
					argument,
					'argument'
				)

				if typeof results == 'string' then command.error results

			if expectedType.name == 'Number' then argument = Number(argument)

			command._incoming.args[position].value = argument

	static def resolveOptions command\Command, options\CommandOptions
		options.options.forEach do(option)
			let position = command._incoming.opts.map do(opt, position)
				let results = opt[option.name.length > 1 ? 'name' : 'alias'] == option.name ? position : null

				if results === null && opt.prop.propAliasOptions && opt.prop.propAliasOptions.includes(option.name)
					results = position

				results

			position = position.filter do(i) i !== null

			if position.length == 1 then position = position[0]

			if command.default && ((position == null && position == undefined) || ((position !== null && position !== undefined) && !command._incoming.opts[position]))
				return

			if (position == null && position == undefined) || ((position !== null && position !== undefined) && !command._incoming.opts[position])
				const required = command.opts!.filter(do(opt) opt.required).map do(opt) '"--' + opt.name + '"'

				const expected = required.length > 0 ? ", expected {required.length > 1 ? 'options' : 'option'} {required.join(', ')}" : ''

				command.error "Unexpected option {option.assessor}{option.name} to \"{command.getName!}\" command{expected}"

			const expectedType = command._incoming.opts[position].type
			let typeReceived

			if expectedType === String

			try
				typeReceived = JSON.parse(option.value).constructor
			catch
				typeReceived = String

			if expectedType !== 'any' && expectedType !== typeReceived
				const name = command._incoming.opts[position].name

				command.error "Got {typeReceived.name} to \"{name}\" option, expected {expectedType.name}"

			let value = option.value

			if expectedType.name == 'Number' then value = Number value
			if expectedType.name == 'Boolean' then value = JSON.parse value

			if command._incoming.opts[position]?.prop && command._incoming.opts[position].prop.validate
				const results = command._incoming.opts[position].prop.validate(command.getName!, option.name, value)

				if typeof results == 'string' then command.error results

			command._incoming.opts[position].value = value
			command._incoming.opts[position].received = option.received

	static def checkRequiredOptions command\Command
		const requiredOptions = command._incoming.opts.filter do(option\CommandOption)
			option.required && (option.value == undefined || option.value == null) && (option.default == undefined || option.default == null)

		if requiredOptions.length > 0
			command.error "Not enough options: (missing: {requiredOptions.map(do(option\CommandOption) '"--' + option.name + '"').join(', ')})."
