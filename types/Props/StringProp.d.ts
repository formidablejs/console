export default class StringProp extends Prop {
    static [$__init__$](): typeof StringProp;
    constructor(...args: any[]);
    type: any;
    defaultValue: any;
    allowsMany: any;
    /**
         * String prop type.
         *
         * @type {StringContructor}
         */
    /**
         * Default value.
         *
         * @type {String}
         */
    /**
         * Allows many values.
         *
         * @type {Booelan}
         */
    /**
         * Set default value.
         *
         * @param {String} value
         * @returns {StringProp}
         */
    /**
    *
         * Set default value.
         *
         * @param {String} value
         * @returns {StringProp}
         
    @param {String} value
    */
    default(value: string): StringProp;
    /**
         * Allow multiple values.
         *
         * @returns {StringProp}
         */
    /**
    *
         * Allow multiple values.
         *
         * @returns {StringProp}
         
    */
    multiple(): StringProp;
    [$__patch__$]($$?: {}): void;
    [$__init__$]($$?: any, deep?: boolean, ...args: any[]): void;
}
import Prop from "./Prop";
declare const $__patch__$: unique symbol;
declare const $__init__$: unique symbol;
export {};
