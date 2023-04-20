export type GroupOptions = {
    /**
     * @default 0
     */
    padding: number;

    /**
     * @default false
     */
    wide: boolean;

    /**
     * @default true
     */
    newLine: boolean;
} | {
    /**
     * @default 0
     */
    padding: number;
} | {
    /**
     * @default false
     */
    wide: boolean;
} | {
    /**
     * @default true
     */
    newLine: boolean;
} | {
    /**
     * @default 0
     */
    padding: number;

    /**
     * @default false
     */
    wide: boolean;
} | {
    /**
     * @default 0
     */
    padding: number;

    /**
     * @default true
     */
    newLine: boolean;
} | {
    /**
     * @default false
     */
    wide: number;

    /**
     * @default true
     */
    newLine: boolean;
}

export default class Output {
    /**
     * @ignore
     */
    static noAnsi: boolean

    /**
     * Create a new message group.
     */
    static group(...args: [GroupOptions, Function] | [Function]): void;

    /**
     * Whether or not to group messages.
     *
     * @@ignore
     */
    static shouldGroup(options: GroupOptions | boolean): void;

    /**
     * Whether or not to add a new line.
     *
     * @ignore
     */
    static canAddLine(): boolean;

    /**
     * Whether or not to expend columns.
     *
     * @ignore
     */
    static canExpand(): boolean;

    /**
     * Set padding around text.
     *
     * @ignore
     */
    static getPadding(): number;

    /**
     * Output a table to the console.
     */
    static table(array: any[], results?: string): void;

    /**
     * Style a string.
     */
    static style(line: string): string;

    /**
     * Write to the console.
     */
    static write(line: string): void;

    /**
     * Write a line to the console.
     */
    static line(line: string): void;

    /**
     * Write a success message to the console.
     */
    static success(line: string): void;

    /**
     * Write an error message to the console.
     */
    static error(error: string | Error, stack?: boolean): never;

    /**
     * Write a message to the console.
     */
    static message(type: 'error' | 'warning' | 'warn' | 'info', message: string, newLine?: boolean, both?: boolean): void

    /**
     * Strip ANSI from a string.
     */
    static stripAnsi(line: string): string;

    /**
     * Write a line from right to left.
     */
    static rtl(line: string): void;

    /**
     * Center a string.
     */
    static center(line: string): void;

    /**
     * @ignore
     */
    static between(values: Array<string>): void;

    /**
     * Create a title.
     */
    static title(value: string): void;

    /**
     * Add a column to the console.
     */
    static column(key: string | Array<string>, value: string | Array<string>, wide?: boolean): void;

    /**
     * Add a new line to the console.
     */
    static newLine(count?: number): void;
}

Output.group(({wide: false}) => {

})