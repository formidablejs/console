export default class GlobalOptions {
    /**
    @param {boolean} help
    @param {boolean} quiet
    @param {boolean} noInteraction
    @param {string} env
    @param {boolean} noAnsi
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
