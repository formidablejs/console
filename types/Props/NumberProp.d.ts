export default class NumberProp extends Prop {
    static [$__init__$](): typeof NumberProp;
    constructor(...args: any[]);
    type: any;
    defaultValue: any;
    /**
    @param {number} value
    @returns { NumberProp }
    */
    default(value: number): NumberProp;
    [$__patch__$]($$?: {}): void;
    [$__init__$]($$?: any, deep?: boolean, ...args: any[]): void;
}
import Prop from "./Prop";
declare const $__patch__$: unique symbol;
declare const $__init__$: unique symbol;
export {};
