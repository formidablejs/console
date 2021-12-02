import Prop from './Prop'

export default class NumberProp < Prop

	/**
	 * Boolean prop type.
	 *
	 * @type {NumberConstructor}
	 */
	prop type = Number

	/**
	 * Default value.
	 *
	 * @type {Number}
	 */
	prop defaultValue\Number

	/**
	 * Set default value.
	 *
	 * @param {Number} value
	 * @returns {NumberProp}
	 */
	def default value\Number
		self.defaultValue = value

		self
