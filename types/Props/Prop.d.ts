import BooleanProp from "./BooleanProp";
import NumberProp from "./NumberProp";
import OptionsProp from "./OptionsProp";
import StringProp from "./StringProp";

export default class Prop {
    constructor(description?: string);
    required: any;
    propDescription: any;
    propAlias: any;
    propAliasOptions: any;
    propAliasDefaults: any;
    /**
    @param {boolean} isNullable
    @returns { Prop }
    */
    nullable(isNullable?: boolean): Prop;
    /**
    @param {string} description
    @returns { Prop }
    */
    description(description: string): Prop;
    /**
    @param {string|Array} alias
    @returns { Prop }
    */
    alias(alias: string | any[]): Prop;
}

export function boolean (description?: string): BooleanProp
export function number (description?: string): NumberProp
export function options (description?: string): OptionsProp
export function string (description?: string): StringProp

export { };
