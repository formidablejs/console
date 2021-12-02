export default class Prop

	/**
	 * Whether prop is required or not.
	 *
	 * @type {Boolean}
	 */
	prop required\Boolean

	/**
	 * Prop description.
	 *
	 * @type {String}
	 */
	prop propDescription\String

	/**
	 * Prop alias.
	 *
	 * @type {String}
	 */
	prop propAlias\String

	/**
	 * Mark as nullable.
	 *
	 * @param {Boolean} isNullable
	 */
	def nullable isNullable\Boolean = true
		self.required = !isNullable

		self

	/**
	 * Set prop description.
	 *
	 * @param {String} description
	 */
	def description description\String
		self.propDescription = description

		self

	/**
	 * Set prop alias.
	 *
	 * @param {String} alias
	 */
	def alias alias\String
		if alias.length !== 1 then throw new RangeError 'Alias length must be 1'

		self.propAlias = alias

		self
