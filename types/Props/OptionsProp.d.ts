export default class OptionsProp extends Prop {
    static [Ψ__init__](): typeof OptionsProp;
    constructor(...args: any[]);
    type: any;
    defaultValue: any;
    allowed: any;
    /**
         * String prop type.
         *
         * @type {StringContructor}
         */
    /**
         * Default value.
         *
         * @type {Number}
         */
    /**
         * Allowed values.
         *
         * @type {any[]}
         */
    /**
         * Set default value.
         *
         * @param {any} value
         * @returns {OptionsProp}
         */
    /**
    *
         * Set default value.
         *
         * @param {any} value
         * @returns {OptionsProp}
         
    @param {any} value
    */
    default(value: any): OptionsProp;
    /**
         * Set allowed values.
         *
         * @param {any} value
         * @returns {OptionsProp}
         */
    /**
    *
         * Set allowed values.
         *
         * @param {any} value
         * @returns {OptionsProp}
         
    @param {any[]} options
    */
    options(options: any[]): OptionsProp;
    /**
         * Validate incoming value.
         *
         * @param {String|null} command
         * @param {any} value
         * @returns {String|Boolean|null}
         */
    /**
    *
         * Validate incoming value.
         *
         * @param {String|null} command
         * @param {any} value
         * @returns {String|Boolean|null}
         
    @param {String|null} command
    @param {String|any} value
    */
    validate(command: string | null, name: any, value: any): string | boolean | null;
    [Ψ__init__]($$?: any, ...args: any[]): void;
}
import Prop from "./Prop";
declare const Ψ__init__: unique symbol;
export {};
