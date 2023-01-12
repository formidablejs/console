import Prop from './Prop'

export default class NumberProp < Prop

	# Boolean prop type.
	prop type\NumberConstructor = Number

	# Default value.
	prop defaultValue\number

	# Set default value.
	def default\NumberProp value\number
		self.defaultValue = value

		self
