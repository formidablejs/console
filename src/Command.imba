import Signature from './Utils/Signature'
import Output from './Output'
import type GlobalOptions from './GlobalOptions'
import type CommandArgument from './Types/CommandArgument'
import type CommandOption from './Types/CommandOption'
import type CommandOptions from './Types/CommandOptions'

export default class Command

	prop #_globalOptions\GlobalOptions

	/**
	 * Exit protocol.
	 *
	 * @type {Boolean|null}
	 */
	prop #silentExit\Boolean = false

	/**
	 * Register as a default command.
	 *
	 * @type {Boolean|null}
	 */
	get default
		null

	/**
	 * The name and signature of the console command.
	 *
	 * @type {String}
	 */
	get signature
		null

	/**
	 * Command props.
	 *
	 * @type {Object}
	 */
	get props
		{}

	/**
	 * The console command description.
	 *
	 * @type {String}
	 */
	get description
		null

	/**
	 * Command options.
	 *
	 * @type {CommandOptions}
	 */
	prop options\CommandOptions

	/**
	 * Incoming arguments and options.
	 *
	 * @type {Object}
	 */
	prop _incoming = { args: {}, opts: {} }

	/**
	 * Global options.
	 *
	 * @var {GlobalOptions|null}
	 */
	get globalOptions
		self.#_globalOptions

	/**
	 * Set global options.
	 *
	 * @param {GlobalOptions} options
	 * @returns {Command}
	 */
	def setGlobalOptions globalOptions\GlobalOptions
		self.#_globalOptions = globalOptions

		self

	/**
	 * Get command name.
	 *
	 * @returns {String|null}
	 */
	def getName
		self.signature.split(' ')[0] ?? null

	/**
	 * Get command group.
	 *
	 * @returns {String|null}
	 */
	def getGroup
		const name\String|null = self.getName!

		let group\String|null = null

		if name && name.includes(':') then group = name.split(':')[0]

		group

	/**
	 * Get registered arguments.
	 *
	 * @returns {CommandArgument[]}
	 */
	def args
		Signature.raw(this).filter do(arg) arg.flag === 'argument'

	/**
	 * Get registered options.
	 *
	 * @returns {CommandOption[]}
	 */
	def opts
		Signature.raw(this).filter do(arg) arg.flag === 'option'

	/**
	 * Write error message.
	 *
	 * @param {String} message
	 * @returns {never}
	 */
	def error message\String
		Output.error message

	/**
	 * Write line message.
	 *
	 * @param {String} message
	 * @returns {void}
	 */
	def line line\any
		Output.line line

	/**
	 * Write formatted message.
	 *
	 * @param {String} message
	 * @returns {void}
	 */
	def write message\any
		Output.write message

	/**
	 * Write line message.
	 *
	 * @param {String} message
	 * @returns {void}
	 */
	def info line\String
		Output.success line

	/**
	 * Write table.
	 *
	 * @param {Array} object
	 * @returns {void}
	 */
	def table object\Array
		Output.table object

	/**
	 * Get incoming argument.
	 *
	 * @param {String} name
	 * @param {mixed} default
	 * @returns {mixed}
	 */
	def argument name\String, default\any = null
		Signature.get this, 'args', name, default

	/**
	 * Get incoming option.
	 *
	 * @param {String} name
	 * @param {mixed} default
	 * @returns {mixed}
	 */
	def option name\String, default\any = null
		Signature.get this, 'opts', name, default

	/**
	 * Execute the console command.
	 *
	 * @returns {mixed}
	 */
	def handle
		0

	/**
	 * Run console command handler.
	 *
	 * @returns {mixed}
	 */
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

	/**
	 * Exit command.
	 *
	 * @param {Number|null} exitCode
	 * @returns {mixed}
	 */
	def exit exitCode\number = null
		if !isNaN(exitCode)
			process.exitCode = Number(exitCode)

		if !#silentExit
			process.exit(process.exitCode ?? 0)
