export default class Prop {
    constructor($$?: any);
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
    [$__patch__$]($$?: {}): void;
    [$__init__$]($$?: any, deep?: boolean): void;
}
declare const $__patch__$: unique symbol;
declare const $__init__$: unique symbol;
export {};
