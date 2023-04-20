import DefaultCommand from "./Commands/DefaultCommand";
import CommandOptions from "../src/Types/CommandOptions";
import Command from "./Command";

export default class Application {
    /**
     * @private
     */
    commands: Array<typeof Command>;

    /**
     * @private
     */
    defaultCommand: DefaultCommand;

    /**
     * @private
     */
    accessible: object;

    /**
     * @private
     */
    name: string;

    /**
     * @private
     */
    version: string;

    /**
     * @private
     */
    signature: string;

    /**
     * @private
     */
    raw: Array<string | number>;

    /**
     * Instantiate a new application.
     */
    constructor(name: string, version?: string | null);

    /**
     * Register a new command.
     */
    register(command: typeof Command): Application;

    /**
     * Get incoming command options.
     */
    options(): CommandOptions;

    /**
     * Add an event that runs when the default is called.
     */
    onDefaultCommand(callback: (options: CommandOptions) => void): Application;

    /**
     * Add an event that runs when a specific command is called.
     */
    onEvent(event: string, callback: (options: CommandOptions) => void): Application;

    /**
     * Run the application and/or invoke a registered command.
     */
    run(signature?: string | null): Promise<any[]>;
}
