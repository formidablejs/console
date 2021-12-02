import OptionsProp from './Props/OptionsProp'
import StringProp from './Props/StringProp'
import BooleanProp from './Props/BooleanProp'
import NumberProp from './Props/NumberProp'

export default class Prop

	static def boolean
		new BooleanProp

	static def number
		new NumberProp

	static def string
		new StringProp

	static def options
		new OptionsProp
