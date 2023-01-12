export default class Prop

	# Whether prop is required or not.
	prop required\boolean

	# Prop description.
	prop propDescription\string

	# Prop alias.
	prop propAlias\string

	# Prop alias options.
	prop propAliasOptions\Array = []

	# Prop alias defaults.
	prop propAliasDefaults\Array = []

	# Mark as nullable.
	def nullable\Prop isNullable\boolean = true
		self.required = !isNullable

		self

	# Set prop description.
	def description\Prop description\string
		self.propDescription = description

		self

	# Set prop alias.
	def alias\Prop alias\string|Array
		if typeof alias === 'string' && alias.length !== 1
			throw new RangeError 'Alias length must be 1'

		if typeof alias === 'object' && !Array.isArray(alias)
			self.propAlias         = Object.keys(alias)[0]
			self.propAliasOptions  = Object.keys(alias)
			self.propAliasDefaults = Object.values(alias)
		else
			self.propAlias = alias

		self
