import Prop from './Prop'

export default class StringProp < Prop

	/**
	 * String prop type.
	 *
	 * @type {StringContructor}
	 */
	prop type = String

	/**
	 * Default value.
	 *
	 * @type {String}
	 */
	prop defaultValue\String

	/**
	 * Allows many values.
	 *
	 * @type {Booelan}
	 */
	prop allowsMany\Boolean = false

	/**
	 * Set default value.
	 *
	 * @param {String} value
	 * @returns {StringProp}
	 */
	def default value\String
		self.defaultValue = value

		self

	/**
	 * Allow multiple values.
	 *
	 * @returns {StringProp}
	 */
	def multiple
		self.allowsMany = true

		self
