export default class Application {
    /**
    @param {string} name
    @param {string|null} version
    */
    constructor(name: string, version?: string | null);
    commands: any;
    defaultCommand: any;
    accessible: any;
    name: string;
    version: string;
    signature: any;
    /**
    @param {Function} command
    @returns { Application }
    */
    register(command: Function): Application;
    /**
    @returns { CommandOptions }
    */
    options(): CommandOptions;
    /**
    @param {Function} callback
    @returns { Application }
    */
    onDefaultCommand(callback: Function): Application;
    /**
    @param {string} event
    @param {Function} callback
    @returns { Application }
    */
    onEvent(event: string, callback: Function): Application;
    /**
    @param {string|null} signature
    */
    run(signature?: string | null): Promise<any[]>;
    [$__patch__$]($$?: {}): void;
    [$__init__$]($$?: any, deep?: boolean): void;
    [$silentExit$]: any;
    [$applicationEvents$]: any;
    [$onDefaultCommandEvents$]: any;
}
declare const $__patch__$: unique symbol;
declare const $__init__$: unique symbol;
declare const $silentExit$: unique symbol;
declare const $applicationEvents$: unique symbol;
declare const $onDefaultCommandEvents$: unique symbol;
export {};
