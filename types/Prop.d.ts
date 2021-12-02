export default class Prop {
    static boolean(): BooleanProp;
    static number(): NumberProp;
    static string(): StringProp;
    static options(): OptionsProp;
}
import BooleanProp from "./Props/BooleanProp";
import NumberProp from "./Props/NumberProp";
import StringProp from "./Props/StringProp";
import OptionsProp from "./Props/OptionsProp";
