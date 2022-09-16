export default class Prop {
    constructor($$?: any);
    required: any;
    propDescription: any;
    propAlias: any;
    propAliasOptions: any;
    propAliasDefaults: any;
    /**
         * Whether prop is required or not.
         *
         * @type {Boolean}
         */
    /**
         * Prop description.
         *
         * @type {String}
         */
    /**
         * Prop alias.
         *
         * @type {String}
         */
    /**
         * Prop alias options.
         *
         * @type {Array}
         */
    /**
         * Prop alias defaults.
         *
         * @type {Array}
         */
    /**
         * Mark as nullable.
         *
         * @param {Boolean} isNullable
         */
    /**
    *
         * Mark as nullable.
         *
         * @param {Boolean} isNullable
         
    @param {Boolean} isNullable
    */
    nullable(isNullable?: boolean): Prop;
    /**
         * Set prop description.
         *
         * @param {String} description
         */
    /**
    *
         * Set prop description.
         *
         * @param {String} description
         
    @param {String} description
    */
    description(description: string): Prop;
    /**
         * Set prop alias.
         *
         * @param {String|Array} alias
         */
    /**
    *
         * Set prop alias.
         *
         * @param {String|Array} alias
         
    @param {String|Array} alias
    */
    alias(alias: string | any[]): Prop;
    [$__patch__$]($$?: {}): void;
    [$__init__$]($$?: any, deep?: boolean): void;
}
declare const $__patch__$: unique symbol;
declare const $__init__$: unique symbol;
export {};
