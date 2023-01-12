export default class StringProp extends Prop {
    static [$__init__$](): typeof StringProp;
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
    [$__patch__$]($$?: {}): void;
    [$__init__$]($$?: any, deep?: boolean, ...args: any[]): void;
}
import Prop from "./Prop";
declare const $__patch__$: unique symbol;
declare const $__init__$: unique symbol;
export {};
