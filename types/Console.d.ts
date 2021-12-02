export default class Console {
    /**
         * A list of registered commands.
         *
         * @type {Array}
         */
    /**
         * Instantiate console
         *
         * @returns {Console}
         */
    /**
    *
         * Instantiate console
         *
         * @returns {Console}
         
    */
    static boot(): Console;
    constructor($$?: any);
    commands: any;
    /**
         * Register a new command.
         *
         * @param {Function} command
         * @returns {Console}
         */
    /**
    *
         * Register a new command.
         *
         * @param {Function} command
         * @returns {Console}
         
    @param {Function} command
    */
    register(command: Function): Console;
    [Ψ__init__]($$?: any): void;
}
declare const Ψ__init__: unique symbol;
export {};
