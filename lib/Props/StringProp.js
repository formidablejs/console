function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};
const Ψ__init__ = Symbol.for('#__init__'), Ψ__initor__ = Symbol.for('#__initor__'), Ψ__inited__ = Symbol.for('#__inited__');
var φ = Symbol();
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var _$Propφ = requireDefault$__(require('./Prop'/*$path$*/));

class StringProp extends _$Propφ.default {
	static [Ψ__init__](){
		this.prototype[Ψ__initor__] = φ;
		return this;
	}
	constructor(){
		super(...arguments);
		super[Ψ__init__] || this[Ψ__init__]();this[Ψ__initor__]===φ && this[Ψ__inited__] && this[Ψ__inited__]();
	}
	[Ψ__init__]($$ = null){
		var vφ;
		super[Ψ__init__] && super[Ψ__init__](...arguments);
		this.type = ($$ && (vφ = $$.type) !== undefined) ? (vφ) : String;
		this.defaultValue = $$ ? $$.defaultValue : undefined;
		this.allowsMany = ($$ && (vφ = $$.allowsMany) !== undefined) ? (vφ) : false;
		
	}
	/**
		 * String prop type.
		 *
		 * @type {StringContructor}
		 */
	
	/**
		 * Default value.
		 *
		 * @type {String}
		 */
	
	/**
		 * Allows many values.
		 *
		 * @type {Booelan}
		 */
	
	/**
		 * Set default value.
		 *
		 * @param {String} value
		 * @returns {StringProp}
		 */
	
	/**
	*
		 * Set default value.
		 *
		 * @param {String} value
		 * @returns {StringProp}
		 
	@param {String} value
	*/
	default(value){
		
		this.defaultValue = value;
		
		return this;
	}
	
	/**
		 * Allow multiple values.
		 *
		 * @returns {StringProp}
		 */
	
	/**
	*
		 * Allow multiple values.
		 *
		 * @returns {StringProp}
		 
	*/
	multiple(){
		
		this.allowsMany = true;
		
		return this;
	}
};
exports.default = StringProp; StringProp[Ψ__init__]();
