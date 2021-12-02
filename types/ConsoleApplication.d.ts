export default class ConsoleApplication {
    /**
         * A list of registered commands.
         *
         * @type {Array}
         */
    /**
         * Instantiate console
         *
         * @returns {ConsoleApplication}
         */
    /**
    *
         * Instantiate console
         *
         * @returns {ConsoleApplication}
         
    */
    static boot(): ConsoleApplication;
    constructor($$?: any);
    commands: any;
    /**
         * Register a new command.
         *
         * @param {Function} command
         * @returns {ConsoleApplication}
         */
    /**
    *
         * Register a new command.
         *
         * @param {Function} command
         * @returns {ConsoleApplication}
         
    @param {Function} command
    */
    register(command: Function): ConsoleApplication;
    run(): void[];
    [Ψ__init__]($$?: any): void;
}
declare const Ψ__init__: unique symbol;
export {};
