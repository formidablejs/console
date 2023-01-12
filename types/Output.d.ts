export default class Output {
    /**
    @param {Array} array
    */
    static table(array: any[], results?: string): void;
    /**
    @param {string} line
    */
    static write(line: string): void;
    /**
    @param {string} line
    */
    static line(line: string): void;
    /**
    @param {string} line
    */
    static success(line: string): void;
    /**
    @param {string} line
    */
    static error(line: string): never;
    static [$__init__$](): typeof Output;
}
declare const $__init__$: unique symbol;
export {};
