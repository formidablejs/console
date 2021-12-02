function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};
const Ψ__init__ = Symbol.for('#__init__'), Ψ__initor__ = Symbol.for('#__initor__'), Ψ__inited__ = Symbol.for('#__inited__');
var φ = Symbol();
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var _$Propφ = requireDefault$__(require('./Prop'/*$path$*/));

class BooleanProp extends _$Propφ.default {
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
		this.type = ($$ && (vφ = $$.type) !== undefined) ? (vφ) : Boolean;
		this.defaultValue = ($$ && (vφ = $$.defaultValue) !== undefined) ? (vφ) : false;
		
	}
	/**
		 * Boolean prop type.
		 *
		 * @type {BooleanConstructor}
		 */
	
	/**
		 * Default value.
		 *
		 * @type {Boolean}
		 */
	
	/**
		 * Set default value.
		 *
		 * @param {Boolean} value
		 * @returns {BooleanProp}
		 */
	
	/**
	*
		 * Set default value.
		 *
		 * @param {Boolean} value
		 * @returns {BooleanProp}
		 
	@param {Boolean} value
	*/
	default(value){
		
		this.defaultValue = value;
		
		return this;
	}
};
exports.default = BooleanProp; BooleanProp[Ψ__init__]();
