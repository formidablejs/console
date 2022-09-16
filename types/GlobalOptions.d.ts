export default class GlobalOptions {
    /**
    @param {Boolean} help
    @param {Boolean} quiet
    @param {Boolean} noInteraction
    @param {String} env
    @param {Boolean} noAnsi
    */
    constructor(help?: boolean, quiet?: boolean, noInteraction?: boolean, env?: string, noAnsi?: boolean, verbose?: number);
    incoming: string[];
    help: boolean;
    quiet: boolean;
    noInteraction: boolean;
    env: string;
    noAnsi: boolean;
    verbose: number;
    [$__patch__$]($$?: {}): void;
    [$__init__$]($$?: any, deep?: boolean): void;
}
declare const $__patch__$: unique symbol;
declare const $__init__$: unique symbol;
export {};
