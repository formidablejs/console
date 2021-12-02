function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};
const Ψ__init__ = Symbol.for('#__init__'), Ψ__initor__ = Symbol.for('#__initor__'), Ψ__inited__ = Symbol.for('#__inited__');
var φ = Symbol();
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var _$Propφ = requireDefault$__(require('./Prop'/*$path$*/));

class OptionsProp extends _$Propφ.default {
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
		this.allowed = ($$ && (vφ = $$.allowed) !== undefined) ? (vφ) : [];
		
	}
	/**
		 * String prop type.
		 *
		 * @type {StringContructor}
		 */
	
	/**
		 * Default value.
		 *
		 * @type {Number}
		 */
	
	/**
		 * Allowed values.
		 *
		 * @type {any[]}
		 */
	
	/**
		 * Set default value.
		 *
		 * @param {any} value
		 * @returns {OptionsProp}
		 */
	
	/**
	*
		 * Set default value.
		 *
		 * @param {any} value
		 * @returns {OptionsProp}
		 
	@param {any} value
	*/
	default(value){
		
		this.defaultValue = value;
		
		return this;
	}
	
	/**
		 * Set allowed values.
		 *
		 * @param {any} value
		 * @returns {OptionsProp}
		 */
	
	/**
	*
		 * Set allowed values.
		 *
		 * @param {any} value
		 * @returns {OptionsProp}
		 
	@param {any[]} options
	*/
	options(options){
		
		this.allowed = options;
		
		return this;
	}
	
	/**
		 * Validate incoming value.
		 *
		 * @param {String|null} command
		 * @param {any} value
		 * @returns {String|Boolean|null}
		 */
	
	/**
	*
		 * Validate incoming value.
		 *
		 * @param {String|null} command
		 * @param {any} value
		 * @returns {String|Boolean|null}
		 
	@param {String|null} command
	@param {String|any} value
	*/
	validate(command,name,value){
		
		const results = this.allowed.some(function(/**@type {String|any}*/expected) {
			
			return ((typeof value == 'string') ? expected.toLowerCase() : expected) == ((typeof value == 'string') ? value.toLowerCase() : value);
		});
		
		if (!results) {
			
			return ("Expected one of [" + this.allowed.map(function(option) { return '"' + option + '"'; }).join(', ') + "] to the \"" + name + "\" option, but got \"" + value + "\" instead");
		};
		
		return true;
	}
};
exports.default = OptionsProp; OptionsProp[Ψ__init__]();
