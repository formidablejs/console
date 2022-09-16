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
	 * Prop alias options.
	 *
	 * @type {Array}
	 */
	prop propAliasOptions = []

	/**
	 * Prop alias defaults.
	 *
	 * @type {Array}
	 */
	prop propAliasDefaults = []

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
	 * @param {String|Array} alias
	 */
	def alias alias\String|Array
		if typeof alias === 'string' && alias.length !== 1
			throw new RangeError 'Alias length must be 1'

		if typeof alias === 'object' && !Array.isArray(alias)
			self.propAlias         = Object.keys(alias)[0]
			self.propAliasOptions  = Object.keys(alias)
			self.propAliasDefaults = Object.values(alias)
		else
			self.propAlias = alias

		self
