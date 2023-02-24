import BooleanProp from './BooleanProp'
import NumberProp from './NumberProp'
import StringProp from './StringProp'
import OptionsProp from './OptionsProp'
import Prop from './Prop'

type PropList = {
	[key: string]: BooleanProp | NumberProp | StringProp | OptionsProp | InstanceType<typeof Prop>
}

export default PropList
