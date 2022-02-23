export default class GlobalOptions {
    /**
    @param {Boolean} help
    @param {Boolean} quiet
    @param {Boolean} noInteraction
    @param {String} env
    @param {Boolean} noAnsi
    */
    constructor(help?: boolean, quiet?: boolean, noInteraction?: boolean, env?: string, noAnsi?: boolean);
    incoming: string[];
    help: boolean;
    quiet: boolean;
    noInteraction: boolean;
    env: string;
    noAnsi: boolean;
    [Ψ__init__]($$?: any): void;
}
declare const Ψ__init__: unique symbol;
export {};
