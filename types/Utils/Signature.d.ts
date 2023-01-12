export default class Signature {
    /**
    @param {Command} command
    */
    static raw(command: Command): {
        position: number;
        name: any;
        default: any;
        description: any;
        type: any;
        required: any;
        flag: string;
        alias: any;
        prop: any;
    }[];
    /**
    @param {Command} command
    @param {string} type
    @param {string} name
    @param {any} default
    */
    static get(command: Command, type: string, name: string, default$: any): any;
    /**
    @param {Command} command
    @param {CommandOptions} options
    */
    static checkRequiredArguments(command: Command, options: CommandOptions): any;
    /**
    @param {Command} command
    @param {CommandOptions} options
    */
    static resolveArguments(command: Command, options: CommandOptions): any;
    /**
    @param {Command} command
    @param {CommandOptions} options
    */
    static resolveOptions(command: Command, options: CommandOptions): any;
    /**
    @param {Command} command
    */
    static checkRequiredOptions(command: Command): any;
}
