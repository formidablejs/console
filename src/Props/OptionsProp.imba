import Prop from './Prop'

export default class OptionsProp < Prop

	/**
	 * String prop type.
	 *
	 * @type {StringContructor}
	 */
	prop type = String

	/**
	 * Default value.
	 *
	 * @type {Number}
	 */
	prop defaultValue\Number

	/**
	 * Allowed values.
	 *
	 * @type {any[]}
	 */
	prop allowed\any[] = []

	/**
	 * Set default value.
	 *
	 * @param {any} value
	 * @returns {OptionsProp}
	 */
	def default value\any
		self.defaultValue = value

		self

	/**
	 * Set allowed values.
	 *
	 * @param {any} value
	 * @returns {OptionsProp}
	 */
	def options options\any[]
		self.allowed = options

		self

	/**
	 * Validate incoming value.
	 *
	 * @param {String|null} command
	 * @param {any} value
	 * @returns {String|Boolean|null}
	 */
	def validate command\String|null, name, value\String|any
		const results = self.allowed.some do(expected\String|any)
			(typeof value == 'string' ? expected.toLowerCase! : expected) == (typeof value == 'string' ? value.toLowerCase! : value)

		if !results
			return "Expected one of [{self.allowed.map(do(option) '"' + option + '"').join(', ')}] to the \"{name}\" option, but got \"{value}\" instead"

		true
