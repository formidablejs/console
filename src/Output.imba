import { Console } from 'console'
import { Transform } from 'stream'
import { ansiRegex } from './Utils/ansiRegex'

export default class Output

	static prop noAnsi\boolean = false

	# Create a new message group.
	static def group ...args
		if args.length > 2
			throw new Error 'Too many arguments. Expected 1 or 2.'

		if args.length == 0
			throw new Error 'Too few arguments. Expected 1 or 2.'

		let options
		let callback

		if args.length === 1
			callback = args[0]
		else
			options = args[0]
			callback = args[1]

		if typeof callback !== 'function'
			throw new TypeError 'Callback must be a function.'

		if options
			shouldGroup(options)

		callback()

		newLine!

		shouldGroup(false)

	# Whether or not to group messages.
	static def shouldGroup options
		if options !== true && options !== false
			process.env.CONSOLE_FORMIDABLE_GROUP = JSON.stringify(options)

			return

		delete process.env.CONSOLE_FORMIDABLE_GROUP

	# Whether or not to add a new line.
	static def canAddLine
		if !process.env.CONSOLE_FORMIDABLE_GROUP
			return true

		const options = JSON.parse(process.env.CONSOLE_FORMIDABLE_GROUP)

		if options.newLine == undefined || options.newLine == null
			return true

		options.newLine == true

	# Whether or not to expend columns.
	static def canExpand
		if !process.env.CONSOLE_FORMIDABLE_GROUP
			return false

		const options = JSON.parse(process.env.CONSOLE_FORMIDABLE_GROUP)

		options.wide && options.wide == true

	# Set padding around text.
	static def getPadding
		if !process.env.CONSOLE_FORMIDABLE_GROUP
			return 0

		const options = JSON.parse(process.env.CONSOLE_FORMIDABLE_GROUP)

		if options.padding == undefined || options.padding == null
			return 0

		options.padding

	# Output a table to the console.
	static def table array\Array, results = ''
		const transform = new Transform {
			transform: do(chunk, enc, cb) cb(null, chunk)
		}

		const logger = new Console { stdout: transform }

		logger.table(array)

		const table = (transform.read! || '').toString!

		for row in table.split /[\r\n]+/
			let r = row.replace(/[^┬]*┬/, '┌')
			r = r.replace(/^├─*┼/, '├')
			r = r.replace(/│[^│]*/, '')
			r = r.replace(/^└─*┴/, '└')
			r = r.replace(/'/g, ' ')
			results += "{r}\n"

		console.log results.replace(/\r?\n?[^\r\n]*$/, '').replace(/\r?\n?[^\r\n]*$/, '')

	# Style line.
	static def style line\string
		if !(typeof line === 'string' || typeof line === 'number')
			throw new TypeError 'Value must be a string or number.'

		if typeof line === 'number' || typeof line === 'bigint'
			line = String(line)

		/** set black background. */
		line = line.replace /<bg:black>([\s\S]*?)<\/bg:black>/g, "\x1b[40m$1\x1b[0m"

		/** set blue background. */
		line = line.replace /<bg:blue>([\s\S]*?)<\/bg:blue>/g, "\x1b[44m$1\x1b[0m"

		/** set cyan background. */
		line = line.replace /<bg:cyan>([\s\S]*?)<\/bg:cyan>/g, "\x1b[46m$1\x1b[0m"

		/** set green background. */
		line = line.replace /<bg:green>([\s\S]*?)<\/bg:green>/g, "\x1b[42m$1\x1b[0m"

		/** set magenta background. */
		line = line.replace /<bg:magenta>([\s\S]*?)<\/bg:magenta>/g, "\x1b[45m$1\x1b[0m"

		/** set red background. */
		line = line.replace /<bg:red>([\s\S]*?)<\/bg:red>/g, "\x1b[41m$1\x1b[0m"

		/** set white background. */
		line = line.replace /<bg:white>([\s\S]*?)<\/bg:white>/g, "\x1b[47m$1\x1b[0m"

		/** set yellow background. */
		line = line.replace /<bg:yellow>([\s\S]*?)<\/bg:yellow>/g, "\x1b[43m$1\x1b[0m"

		/** set black color. */
		line = line.replace /<fg:black>([\s\S]*?)<\/fg:black>/g, "\x1b[30m$1\x1b[0m"

		/** set blue color. */
		line = line.replace /<fg:blue>([\s\S]*?)<\/fg:blue>/g, "\x1b[34m$1\x1b[0m"

		/** set cyan color. */
		line = line.replace /<fg:cyan>([\s\S]*?)<\/fg:cyan>/g, "\x1b[36m$1\x1b[0m"

		/** set green color. */
		line = line.replace /<fg:green>([\s\S]*?)<\/fg:green>/g, "\x1b[32m$1\x1b[0m"

		/** set magenta color. */
		line = line.replace /<fg:magenta>([\s\S]*?)<\/fg:magenta>/g, "\x1b[35m$1\x1b[0m"

		/** set red color. */
		line = line.replace /<fg:red>([\s\S]*?)<\/fg:red>/g, "\x1b[31m$1\x1b[0m"

		/** set white color. */
		line = line.replace /<fg:white>([\s\S]*?)<\/fg:white>/g, "\x1b[37m$1\x1b[0m"

		/** set yellow color. */
		line = line.replace /<fg:yellow>([\s\S]*?)<\/fg:yellow>/g, "\x1b[33m$1\x1b[0m"

		/** make text dim. */
		line = line.replace /<dim>([\s\S]*?)<\/dim>/g, "\x1b[2m$1\x1b[0m"

		/** make text bright. */
		line = line.replace /<bright>([\s\S]*?)<\/bright>/g, "\x1b[1m$1\x1b[0m"

		/** underline text. */
		line = line.replace /<u>([\s\S]*?)<\/u>/g, "\x1b[4m$1\x1b[0m"
		line = line.replace /<underline>([\s\S]*?)<\/underline>/g, "\x1b[4m$1\x1b[0m"

		noAnsi ? stripAnsi(line) : line

	# Write line with templating support.
	static def write line\string
		console.log style(line)

	# Strip ANSI from a string.
	static def stripAnsi line\string
		if !(typeof line === 'string' || typeof line === 'number' || typeof line === 'bigint')
			throw new TypeError "Expected a \"string\", got \"{typeof line}\""

		if typeof line === 'number' || typeof line === 'bigint'
			line = String(line)

		line.replace(ansiRegex!, '')

	# Write raw line.
	static def line line\string
		console.log line

	# Write success line.
	static def success line\string
		Output.write "<fg:green>{line}</fg:green>"

	# Write error line.
	static def error error\string|Error, stack\boolean = false
		if !(typeof error === 'string' || error instanceof Error)
			throw new TypeError 'Value must be a string or Error.'

		if typeof stack !== 'boolean'
			throw new TypeError 'Value must be a boolean.'

		newLine!

		let length = 0

		const message = error instanceof Error ? error.message : error

		message.split('\n').forEach do(l) length = l.length > length ? l.length : length

		Output.write "<bg:red>{' '.repeat(length + 4)}</bg:red>"

		message.split('\n').forEach do(l) Output.write "<bg:red>  {l + ' '.repeat(length - l.length)}  </bg:red>"

		Output.write "<bg:red>{' '.repeat(length + 4)}</bg:red>"

		newLine!

		if error instanceof Error && stack == true
			console.error error.stack

			newLine!

		process.exit 1

	# Write message.
	static def message type\string, message\string, newLine\boolean = true, both\boolean = false
		type = type.toLowerCase!

		if !['error', 'warning', 'warn', 'info'].includes(type)
			throw new Error 'Invalid message type.'

		const bgMap = {
			error: 'red',
			info: 'blue',
			warning: 'yellow'
			warn: 'yellow'
		}

		let fg = ''

		if type === 'warning' || type === 'warn'
			fg = 'fg:red'

		if self.internal
			newLine = false

		const topLeft     = !newLine ? (both ? '' : '\n' ) : '\n'
		const msgType     = type === 'warning' ? 'warn' : type
		const bottomRight = canAddLine() ? (newLine ? '\n' : '') : ''

		self.write "{topLeft}  <bg:{bgMap[type]}>{fg ? '<' + fg + '>' : ''} {msgType.toUpperCase!} {fg ? '</' + fg + '>' : ''}</bg:{bgMap[type]}> {message}{bottomRight}"

	# Write a line from right to left.
	static def rtl value\string
		const columns = process.stdout.columns

		self.write ' '.repeat(columns - style(value).replace(/\u001b\[.*?m/g, '').length) + value

	# Center a string.
	static def center value\string
		const columns = process.stdout.columns

		self.write ' '.repeat((columns - style(value).replace(/\u001b\[.*?m/g, '').length) / 2) + value

	static def between values\Array
		const columns = process.stdout.columns

		const total = values.reduce((do(a, b) a + style(b).replace(/\u001b\[.*?m/g, '').length), 0)

		const spaces = columns - total

		const space = ' '.repeat(spaces / (values.length - 1))

		self.write values.join(space)

	# Create a title.
	static def title value\string
		self.write "\n{' '.repeat(getPadding!)}{value}"

	# Add a column to the console.
	static def column key\any, value\any, wide\boolean = false
		if value === undefined || value === null
			value = ''

		const keyTree = []

		if Array.isArray(key)
			for i in key
				keyTree.push i if key.indexOf(i) !== 0

			key = "{key[0]} [{keyTree.join(', ')}]"
		else
			key = key

		const valueTree = []

		if Array.isArray(value)
			valueTree.push i for i in value

			value = valueTree.join(' ')

		if canExpand! then wide = true

		const count   = wide ? process.stdout.columns : (process.stdout.columns > 180 ? 180 : process.stdout.columns)
		const columns = '.'.repeat(count - stripAnsi(style(key)).length - (stripAnsi(style(value)).length + 2 + (getPadding! * 2)))

		self.write "{' '.repeat(getPadding!)}{key} <dim>{columns}</dim> {value}{' '.repeat(getPadding!)}"

	# Add a new line to the console.
	static def newLine count\number = 1
		console.log '\n'.repeat(count - 1)
