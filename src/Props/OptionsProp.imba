import Prop from './Prop'

export default class OptionsProp < Prop

	# String prop type.
	prop type\StringContructor = String

	# Default value.
	prop defaultValue\number

	# Allowed values.
	prop allowed\any[] = []

	# Set default value.
	def default\OptionsProp value\any
		self.defaultValue = value

		self

	# Set allowed values.
	def options\OptionsProp options\any[]
		self.allowed = options

		self

	# Validate incoming value.
	def validate\string|boolean|null command\string|null, name, value\string|any, type\string = 'option'
		const results = self.allowed.some do(expected\string|any)
			(typeof value == 'string' ? expected.toLowerCase! : expected) == (typeof value == 'string' ? value.toLowerCase! : value)

		if !results
			return "Expected one of [{self.allowed.map(do(option) '"' + option + '"').join(', ')}] to the \"{name}\" {type}, but got \"{value}\" instead"

		true
