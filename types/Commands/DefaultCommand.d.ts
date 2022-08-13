export default class DefaultCommand extends Command {
    static [$__init__$](): typeof DefaultCommand;
    constructor(...args: any[]);
    commands: any;
    name: any;
    version: any;
    /**
         * A list of registered commands.
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
         * A list of help options.
         *
         * @type {{}[]}
         */
    /**
    *
         * A list of help options.
         *
         * @type {{}[]}
         
    */
    get helpOptions(): {}[];
    /**
         * Set application name.
         *
         * @param {String} name
         * @returns {DefaultCommand}
         */
    /**
    *
         * Set application name.
         *
         * @param {String} name
         * @returns {DefaultCommand}
         
    @param {String} name
    */
    setName(name: string): DefaultCommand;
    /**
         * Set application version.
         *
         * @param {String} version
         * @returns {DefaultCommand}
         */
    /**
    *
         * Set application version.
         *
         * @param {String} version
         * @returns {DefaultCommand}
         
    @param {String} version
    */
    setVersion(version: string): DefaultCommand;
    /**
         * Set registered commands.
         *
         * @param {String} version
         * @returns {DefaultCommand}
         */
    /**
    *
         * Set registered commands.
         *
         * @param {String} version
         * @returns {DefaultCommand}
         
    @param {Command[]} commands
    */
    registered(commands: Command[]): DefaultCommand;
    /**
    @param {Array} commands
    @param {Number} length
    */
    displayHelp(commands: any[], length: number): void;
    /**
    @param {Command} command
    */
    displayCommandHelp(command: Command): void;
    displayVersion(): void;
    [$__patch__$]($$?: {}): void;
    [$__init__$]($$?: any, deep?: boolean, ...args: any[]): void;
}
import Command from "../Command";
declare const $__patch__$: unique symbol;
declare const $__init__$: unique symbol;
export {};
