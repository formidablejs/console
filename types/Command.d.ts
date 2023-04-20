import CommandArgument from '../src/Types/CommandArgument';
import CommandOption from '../src/Types/CommandOption';
import CommandOptions from '../src/Types/CommandOptions';
import GlobalOptions from './GlobalOptions';
import PropList from './Props/PropList';

export type Incoming = {
    args: object;
    opts: object;
}

export default class Command {
    /**
     * @private
     */
    #_globalOptions: GlobalOptions;

    /**
     * @private
     */
    silentExit: boolean;

    /**
     * @private
     */
    internal: boolean;

    /**
     * @private
     */
    options: CommandOptions;

    /**
     * @private
     */
    _incoming: Incoming;

    /**
     * Instantiate a new command.
     */
    constructor($$?: any);

    /**
     * Whether or not this is the default command.
     */
    get default(): boolean;

    /**
     * The command signature.
     */
    get signature(): string;

    /**
     * The command properties.
     */
    get props(): PropList;

    /**
     * The command description.
     */
    get description(): string;

    /**
     * The Application's global command options.
     */
    get globalOptions(): any;

    /**
     * Set Application's global command options.
     */
    setGlobalOptions(globalOptions: GlobalOptions): Command;

    /**
     * The command name.
     */
    getName(): string | null;

    /**
     * The command group.
     */
    getGroup(): string | null;

    /**
     * The command's arguments.
     */
    args(): CommandArgument[];

    /**
     * The command's options.
     */
    opts(): CommandOption[];

    /**
     * Add a new line to the console.
     */
    newLine(count?: number): void;

    /**
     * Write a message to the console.
     */
    message(type: 'error' | 'warning' | 'warn' | 'info', message: string, newLine?: boolean, both?: boolean): void;

    /**
     * Write an error message to the console.
     */
    error(error: string | Error, stack?: boolean): never;

    /**
     * Write a line to the console.
     */
    line(line: string): void;

    /**
     * Write to the console.
     */
    write(message: string): void;

    /**
     * Write to the console.
     */
    info(message: string): void;

    /**
     * Write a success message to the console.
     */
    success(line: string): void;

    /**
     * Output a table to the console.
     */
    table(object: any[]): void;

    /**
     * Create a title.
     */
    title(value: string): void;

    /**
     * Write a line from right to left.
     */
    rtl(line: string): void;

    /**
     * Center a string.
     */
    center(line: string): void;

    /**
     * Add a column to the console.
     */
    column(key: string | Array<string>, value: string | Array<string>, wide?: boolean): void;

    /**
     * Log a message to the console.
     */
    log(...args: any[]): void;

    /**
     * Get incoming command argument.
     */
    argument(name: string, default$?: any): any;

    /**
     * Get incoming command option.
     */
    option(name: string, default$?: any): any;

    /**
     * Execute the command.
     */
    handle(): void | never | number | Promise<void | never | number>;

    /**
     * Run the command handler.
     */
    run(options: CommandOptions, globalOptions: GlobalOptions | null): Promise<number>;

    /**
     * Exit command/application.
     */
    exit(exitCode?: number): never;
}

export { };
