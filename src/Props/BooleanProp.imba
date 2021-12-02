import Prop from './Prop'

export default class BooleanProp < Prop

	/**
	 * Boolean prop type.
	 *
	 * @type {BooleanConstructor}
	 */
	prop type = Boolean

	/**
	 * Default value.
	 *
	 * @type {Boolean}
	 */
	prop defaultValue\Boolean = false

	/**
	 * Set default value.
	 *
	 * @param {Boolean} value
	 * @returns {BooleanProp}
	 */
	def default value\Boolean
		self.defaultValue = value

		self
