export default class Command {
    constructor($$?: any);
    options: any;
    _incoming: any;
    /**
         * Register as a default command.
         *
         * @type {Boolean|null}
         */
    /**
    *
         * Register as a default command.
         *
         * @type {Boolean|null}
         
    */
    get default(): boolean;
    /**
         * The name and signature of the console command.
         *
         * @type {String}
         */
    /**
    *
         * The name and signature of the console command.
         *
         * @type {String}
         
    */
    get signature(): string;
    /**
         * Command props.
         *
         * @type {Object}
         */
    /**
    *
         * Command props.
         *
         * @type {Object}
         
    */
    get props(): any;
    /**
         * The console command description.
         *
         * @type {String}
         */
    /**
    *
         * The console command description.
         *
         * @type {String}
         
    */
    get description(): string;
    /**
         * Command options.
         *
         * @type {CommandOptions}
         */
    /**
         * Incoming arguments and options.
         *
         * @type {Object}
         */
    /**
         * Global options.
         *
         * @var {GlobalOptions|null}
         */
    /**
    *
         * Global options.
         *
         * @var {GlobalOptions|null}
         
    */
    get globalOptions(): any;
    /**
         * Set global options.
         *
         * @param {GlobalOptions} options
         * @returns {Command}
         */
    /**
    *
         * Set global options.
         *
         * @param {GlobalOptions} options
         * @returns {Command}
         
    @param {GlobalOptions} options
    */
    setGlobalOptions(options: GlobalOptions): Command;
    /**
         * Get command name.
         *
         * @returns {String|null}
         */
    /**
    *
         * Get command name.
         *
         * @returns {String|null}
         
    */
    getName(): string | null;
    /**
         * Get command group.
         *
         * @returns {String|null}
         */
    /**
    *
         * Get command group.
         *
         * @returns {String|null}
         
    */
    getGroup(): string | null;
    /**
         * Get registered arguments.
         *
         * @returns {CommandArgument[]}
         */
    /**
    *
         * Get registered arguments.
         *
         * @returns {CommandArgument[]}
         
    */
    args(): CommandArgument[];
    /**
         * Get registered options.
         *
         * @returns {CommandOption[]}
         */
    /**
    *
         * Get registered options.
         *
         * @returns {CommandOption[]}
         
    */
    opts(): CommandOption[];
    /**
         * Write error message.
         *
         * @param {String} message
         * @returns {never}
         */
    /**
    *
         * Write error message.
         *
         * @param {String} message
         * @returns {never}
         
    @param {String} message
    */
    error(message: string): never;
    /**
         * Write line message.
         *
         * @param {String} message
         * @returns {void}
         */
    /**
    *
         * Write line message.
         *
         * @param {String} message
         * @returns {void}
         
    @param {any} line
    */
    line(line: any): void;
    /**
         * Write formatted message.
         *
         * @param {String} message
         * @returns {void}
         */
    /**
    *
         * Write formatted message.
         *
         * @param {String} message
         * @returns {void}
         
    @param {any} message
    */
    write(message: string): void;
    /**
         * Write line message.
         *
         * @param {String} message
         * @returns {void}
         */
    /**
    *
         * Write line message.
         *
         * @param {String} message
         * @returns {void}
         
    @param {String} line
    */
    info(line: string): void;
    /**
         * Write table.
         *
         * @param {Array} object
         * @returns {void}
         */
    /**
    *
         * Write table.
         *
         * @param {Array} object
         * @returns {void}
         
    @param {Array} object
    */
    table(object: any[]): void;
    /**
         * Get incoming argument.
         *
         * @param {String} name
         * @param {mixed} default
         * @returns {mixed}
         */
    /**
    *
         * Get incoming argument.
         *
         * @param {String} name
         * @param {mixed} default
         * @returns {mixed}
         
    @param {String} name
    @param {any} default
    */
    argument(name: string, default$?: any): mixed;
    /**
         * Get incoming option.
         *
         * @param {String} name
         * @param {mixed} default
         * @returns {mixed}
         */
    /**
    *
         * Get incoming option.
         *
         * @param {String} name
         * @param {mixed} default
         * @returns {mixed}
         
    @param {String} name
    @param {any} default
    */
    option(name: string, default$?: any): mixed;
    /**
         * Execute the console command.
         *
         * @returns {mixed}
         */
    /**
    *
         * Execute the console command.
         *
         * @returns {mixed}
         
    */
    handle(): mixed;
    /**
         * Run console command handler.
         *
         * @returns {mixed}
         */
    /**
    *
         * Run console command handler.
         *
         * @returns {mixed}
         
    @param {CommandOptions} options
    */
    run(options: CommandOptions): mixed;
    [Ψ__init__]($$?: any): void;
    [Ψ_globalOptions]: any;
}
declare const Ψ__init__: unique symbol;
declare const Ψ_globalOptions: unique symbol;
export {};
