import OptionsProp from './Props/OptionsProp'
import StringProp from './Props/StringProp'
import BooleanProp from './Props/BooleanProp'
import NumberProp from './Props/NumberProp'

export default class Prop

	static def boolean description\string = null
		new BooleanProp(description)

	static def number description\string = null
		new NumberProp(description)

	static def options description\string = null
		new OptionsProp(description)

	static def string description\string = null
		new StringProp(description)

export def boolean description\string = null
	Prop.boolean(description)

export def number description\string = null
	Prop.number(description)

export def options description\string = nulldescription\string = null
	Prop.options(description)

export def string description\string = null
	Prop.string(description)

