import Signature from './Utils/Signature'
import Output from './Output'
import type GlobalOptions from './GlobalOptions'
import type CommandArgument from './Types/CommandArgument'
import type CommandOption from './Types/CommandOption'
import type CommandOptions from './Types/CommandOptions'

export default class Command

	prop #_globalOptions\GlobalOptions

	# Exit protocol.
	prop silentExit\boolean = false

	# Internal command.
	prop internal\boolean = false

	# Command options.
	prop options\CommandOptions

	# Incoming arguments and options.
	prop _incoming = { args: {}, opts: {} }

	# Register as a default command.
	get default\boolean|null
		null

	# The name and signature of the console command.
	get signature\string
		null

	# Command props.
	get props\object
		{}

	# The console command description.
	get description\string|null
		null

	# Global options.
	get globalOptions\GlobalOptions|null
		self.#_globalOptions

	# Set global options.
	def setGlobalOptions\Command globalOptions\GlobalOptions
		self.#_globalOptions = globalOptions

		self

	# Get command name.
	def getName\string|null
		self.signature.split(' ')[0] ?? null

	# Get command group.
	def getGroup\string|null
		const name\string|null = self.getName!

		let group\string|null = null

		if name && name.includes(':') then group = name.split(':')[0]

		group

	# Get registered arguments.
	def args\CommandArgument[]
		Signature.raw(this).filter do(arg) arg.flag === 'argument'

	# Get registered options.
	def opts\CommandOption[]
		Signature.raw(this).filter do(arg) arg.flag === 'option'

	# Add a new line to the console.
	def newLine count\number = 1
		Output.newLine count

	# Write a message to the console.
	def message type\string, message\string, newLine\boolean = true, both\boolean = false
		Output.message type, message, newLine, both

	# Write an error message to the console.
	def error error\string, stack\boolean = false
		Output.error error, stack

	# Write a line to the console.
	def line line\any
		Output.line line

	# Write to the console.
	def write message\any
		Output.write message

	# Write to the console.
	def info line\string
		Output.write line

	# Write a success message to the console.
	def success line\string
		Output.success line

	# Output a table to the console.
	def table object\Array
		Output.table object

	# Create a title.
	def title value\string
		Output.title value

	# Write a line from right to left.
	def rtl value\string
		Output.rtl value

	# Center a string.
	def center value\string
		Output.center value

	# Add a column to the console.
	def column key\any, value\any, wide\boolean = false
		Output.column key, value, wide

	# Log to console.
	def log
		console.log.apply console, arguments

	# Get incoming argument.
	def argument name\string, default\any = null
		Signature.get this, 'args', name, default

	# Get incoming option.
	def option name\string, default\any = null
		Signature.get this, 'opts', name, default

	# Execute the console command.
	def handle
		0

	# Run console command handler.
	def run options\CommandOptions, globalOptions\GlobalOptions|null
		self.options = options

		self.setGlobalOptions(globalOptions)

		self._incoming.args = self.args!
		self._incoming.opts = self.opts!

		Signature.checkRequiredArguments this, options
		Signature.resolveArguments this, options
		Signature.resolveOptions this, options
		Signature.checkRequiredOptions this

		const results = await self.handle!

		if !isNaN(results) then process.exitCode = Number(results)

		results

	# Exit command.
	def exit exitCode\number = null
		if !isNaN(exitCode)
			process.exitCode = Number(exitCode)

		if !silentExit
			process.exit(process.exitCode ?? 0)
