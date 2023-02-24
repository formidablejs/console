export default class OptionsProp extends Prop {
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
}
import Prop from "./Prop";
export {};
