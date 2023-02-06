export default class DefaultCommand extends Command {
    static [$__init__$](): typeof DefaultCommand;
    constructor(...args: any[]);
    commands: any;
    name: any;
    version: any;
    /**
    @returns { Array<object> }
    */
    get helpOptions(): any[];
    /**
    @param {string} name
    @returns { DefaultCommand }
    */
    setName(name: string): DefaultCommand;
    /**
    @param {string} version
    @returns { DefaultCommand }
    */
    setVersion(version: string): DefaultCommand;
    /**
    @param {Command[]} commands
    @returns { DefaultCommand }
    */
    registered(commands: Command[]): DefaultCommand;
    /**
    @param {Array} commands
    @param {number} length
    */
    displayHelp(commands: any[], length: number): void;
    /**
    @param {Command} command
    */
    displayCommandHelp(command: Command): void;
    displayVersion(): void;
    handle(): 0 | 1 | GlobalOptions;
    [$__patch__$]($$?: {}): void;
    [$__init__$]($$?: any, deep?: boolean, ...args: any[]): void;
}
import Command from "../Command";
import GlobalOptions from "../GlobalOptions";
declare const $__patch__$: unique symbol;
declare const $__init__$: unique symbol;
export {};
