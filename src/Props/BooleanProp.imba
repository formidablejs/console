import Prop from './Prop'

export default class BooleanProp < Prop

	# Boolean prop type.
	prop type\BooleanConstructor = Boolean

	# Default value.
	prop defaultValue\boolean = false

	# Set default value.
	def default\BooleanProp value\boolean
		self.defaultValue = value

		self
