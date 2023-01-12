export default class Command {
    constructor($$?: any);
    silentExit: any;
    options: any;
    _incoming: any;
    /**
    @returns { boolean|null }
    */
    get default(): boolean;
    /**
    @returns { string }
    */
    get signature(): string;
    /**
    @returns { object }
    */
    get props(): any;
    /**
    @returns { string|null }
    */
    get description(): string;
    /**
    @returns { GlobalOptions|null }
    */
    get globalOptions(): any;
    /**
    @param {GlobalOptions} globalOptions
    @returns { Command }
    */
    setGlobalOptions(globalOptions: GlobalOptions): Command;
    /**
    @returns { string|null }
    */
    getName(): string | null;
    /**
    @returns { string|null }
    */
    getGroup(): string | null;
    /**
    @returns { CommandArgument[] }
    */
    args(): CommandArgument[];
    /**
    @returns { CommandOption[] }
    */
    opts(): CommandOption[];
    /**
    @param {string} message
    */
    error(message: string): never;
    /**
    @param {any} line
    */
    line(line: any): void;
    /**
    @param {any} message
    */
    write(message: any): void;
    /**
    @param {string} line
    */
    info(line: string): void;
    /**
    @param {Array} object
    */
    table(object: any[]): void;
    /**
    @param {string} name
    @param {any} default
    */
    argument(name: string, default$?: any): any;
    /**
    @param {string} name
    @param {any} default
    */
    option(name: string, default$?: any): any;
    handle(): number;
    /**
    @param {CommandOptions} options
    @param {GlobalOptions|null} globalOptions
    */
    run(options: CommandOptions, globalOptions: GlobalOptions | null): Promise<number>;
    /**
    @param {number} exitCode
    */
    exit(exitCode?: number): never;
    [$__patch__$]($$?: {}): void;
    [$__init__$]($$?: any, deep?: boolean): void;
    [$_globalOptions$]: any;
}
declare const $__patch__$: unique symbol;
declare const $__init__$: unique symbol;
declare const $_globalOptions$: unique symbol;
export {};
