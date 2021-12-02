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
    options(...args: any[]): any;
    /**
    @param {String|null} signature
    */
    run(signature?: string | null): any;
    [Ψ__init__]($$?: any): void;
}
declare const Ψ__init__: unique symbol;
export {};
