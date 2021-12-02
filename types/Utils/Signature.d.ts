export default class Signature {
    /**
    @param {Command} command
    */
    static raw(command: any): {
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
    @param {String} type
    @param {String} name
    @param {any} default
    */
    static get(command: any, type: string, name: string, default$: any): any;
    /**
    @param {Command} command
    @param {CommandOptions} options
    */
    static checkRequiredArguments(command: any, options: any): any;
    /**
    @param {Command} command
    @param {CommandOptions} options
    */
    static resolveArguments(command: any, options: any): any;
    /**
    @param {Command} command
    @param {CommandOptions} options
    */
    static resolveOptions(command: any, options: any): any;
    /**
    @param {Command} command
    */
    static checkRequiredOptions(command: any): any;
}
