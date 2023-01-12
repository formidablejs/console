import Prop from './Prop'

export default class StringProp < Prop

	# String prop type.
	prop type\StringContructor = String

	# Default value.
	prop defaultValue\string

	# Allows many values.
	prop allowsMany\boolean = false

	# Set default value.
	def default\StringProp value\string
		self.defaultValue = value

		self

	# Allow multiple values.
	def multiple\StringProp
		self.allowsMany = true

		self
