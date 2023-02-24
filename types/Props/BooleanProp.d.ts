export default class BooleanProp extends Prop {
    constructor(...args: any[]);
    type: any;
    defaultValue: any;
    /**
    @param {boolean} value
    @returns { BooleanProp }
    */
    default(value: boolean): BooleanProp;
}
import Prop from "./Prop";
export {};
