export default class Output {
    /**
    @param {Array} array
    */
    static table(array: any[], results?: string): void;
    /**
         * Write line with templating support.
         *
         * @param {String} line
         * @returns {void}
         */
    /**
    *
         * Write line with templating support.
         *
         * @param {String} line
         * @returns {void}
         
    @param {String} line
    */
    static write(line: string): void;
    /**
         * Write raw line.
         *
         * @param {String} line
         * @returs {void}
         */
    /**
    *
         * Write raw line.
         *
         * @param {String} line
         * @returs {void}
         
    @param {String} line
    */
    static line(line: string): void;
    /**
         * Write success line.
         *
         * @param {String} line
         * @returs {void}
         */
    /**
    *
         * Write success line.
         *
         * @param {String} line
         * @returs {void}
         
    @param {String} line
    */
    static success(line: string): void;
    /**
         * Write error line.
         *
         * @param {String} line
         * @returs {void}
         */
    /**
    *
         * Write error line.
         *
         * @param {String} line
         * @returs {void}
         
    @param {String} line
    */
    static error(line: string): never;
}
