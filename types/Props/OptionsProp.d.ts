export default class OptionsProp extends Prop {
    static [$__init__$](): typeof OptionsProp;
    constructor(...args: any[]);
    type: any;
    defaultValue: any;
    allowed: any;
    /**
    @param {any} value
    @returns { OptionsProp }
    */
    default(value: any): OptionsProp;
    /**
    @param {any[]} options
    @returns { OptionsProp }
    */
    options(options: any[]): OptionsProp;
    /**
    @param {string|null} command
    @param {string|any} value
    @returns { string|boolean|null }
    */
    validate(command: string | null, name: any, value: string | any): string | boolean | null;
    [$__patch__$]($$?: {}): void;
    [$__init__$]($$?: any, deep?: boolean, ...args: any[]): void;
}
import Prop from "./Prop";
declare const $__patch__$: unique symbol;
declare const $__init__$: unique symbol;
export {};
