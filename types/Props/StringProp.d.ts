export default class StringProp extends Prop {
    constructor(...args: any[]);
    type: any;
    defaultValue: any;
    allowsMany: any;
    /**
    @param {string} value
    @returns { StringProp }
    */
    default(value: string): StringProp;
    /**
    @returns { StringProp }
    */
    multiple(): StringProp;
}
import Prop from "./Prop";
export {};
