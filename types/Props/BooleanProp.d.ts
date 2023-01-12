export default class BooleanProp extends Prop {
    static [$__init__$](): typeof BooleanProp;
    constructor(...args: any[]);
    type: any;
    defaultValue: any;
    /**
    @param {boolean} value
    @returns { BooleanProp }
    */
    default(value: boolean): BooleanProp;
    [$__patch__$]($$?: {}): void;
    [$__init__$]($$?: any, deep?: boolean, ...args: any[]): void;
}
import Prop from "./Prop";
declare const $__patch__$: unique symbol;
declare const $__init__$: unique symbol;
export {};
