export default class NumberProp extends Prop {
    constructor(...args: any[]);
    type: any;
    defaultValue: any;
    /**
    @param {number} value
    @returns { NumberProp }
    */
    default(value: number): NumberProp;
}
import Prop from "./Prop";
export {};
