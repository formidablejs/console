export default class Application {
    /**
         * A list of registered commands.
         *
         * @type {Array}
         */
    /**
         * Default command.
         *
         * @type {DefaultCommand}
         */
    /**
         * Accessible commands.
         *
         * @type {Object}
         */
    /**
         * Application name
         *
         * @type {String}
         */
    /**
         * Application version (semver).
         *
         * @type {String}
         */
    /**
         * Custom signature.
         *
         * @type {String|null}
         */
    /**
         * Application events.
         *
         * @type {Function[]|null}
         */
    /**
         * onDefaultCommand events.
         *
         * @type {Function[]|null}
         */
    /**
         * Instantiate console
         *
         * @param {String} name
         * @param {String} version
         */
    /**
    *
         * Instantiate console
         *
         * @param {String} name
         * @param {String} version
         
    @param {String} name
    @param {String|null} version
    */
    constructor(name: string, version?: string);
    commands: any;
    defaultCommand: any;
    accessible: any;
    name: string;
    version: string;
    signature: any;
    /**
         * Register a new command.
         *
         * @param {Function} command
         * @returns {Application}
         */
    /**
    *
         * Register a new command.
         *
         * @param {Function} command
         * @returns {Application}
         
    @param {Function} command
    */
    register(command: Function): Application;
    /**
         * Get incoming command options.
         *
         * @returns {CommandOptions}
         */
    /**
    *
         * Get incoming command options.
         *
         * @returns {CommandOptions}
         
    */
    options(...args: any[]): CommandOptions;
    /**
    @param {Function} callback
    */
    onDefaultCommand(callback: Function): Application;
    /**
    @param {String} event
    @param {Function} callback
    */
    onEvent(event: string, callback: Function): Application;
    /**
    @param {String|null} signature
    */
    run(signature?: string | null): any[];
    [Ψ__init__]($$?: any): void;
    [ΨapplicationEvents]: any;
    [ΨonDefaultCommandEvents]: any;
}
declare const Ψ__init__: unique symbol;
declare const ΨapplicationEvents: unique symbol;
declare const ΨonDefaultCommandEvents: unique symbol;
export {};
