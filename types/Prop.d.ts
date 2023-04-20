export default class Prop {
    static boolean(description?: string): BooleanProp;
    static number(description?: string): NumberProp;
    static string(description?: string): StringProp;
    static options(description?: string): OptionsProp;
}
import BooleanProp from "./Props/BooleanProp";
import NumberProp from "./Props/NumberProp";
import StringProp from "./Props/StringProp";
import OptionsProp from "./Props/OptionsProp";
