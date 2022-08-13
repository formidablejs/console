function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};
const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $__initor__$ = Symbol.for('#__initor__'), $__inited__$ = Symbol.for('#__inited__'), $__hooks__$ = Symbol.for('#__hooks__');
var $2 = Symbol();
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var $1 = requireDefault$__(require('./Prop'/*$path$*/));

class OptionsProp extends $1.default {
	static [$__init__$](){
		this.prototype[$__initor__$] = $2;
		return this;
	}
	[$__patch__$]($$ = {}){
		var $3;
		super[$__patch__$] && super[$__patch__$]($$);
		($3 = $$.type) !== undefined && (this.type = $3);
		($3 = $$.defaultValue) !== undefined && (this.defaultValue = $3);
		($3 = $$.allowed) !== undefined && (this.allowed = $3);
		
	}
	constructor(){
		super(...arguments);
		super[$__init__$] || this[$__init__$]();this[$__initor__$]===$2 && (this[$__hooks__$]&&this[$__hooks__$].inited(this),this[$__inited__$] && this[$__inited__$]());
	}
	[$__init__$]($$ = null,deep = true){
		var $4;
		deep && super[$__init__$] && super[$__init__$](...arguments);
		this.type = ($$ && ($4 = $$.type) !== undefined) ? ($4) : String;
		this.defaultValue = $$ ? $$.defaultValue : undefined;
		this.allowed = ($$ && ($4 = $$.allowed) !== undefined) ? ($4) : [];
		
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
exports.default = OptionsProp; OptionsProp[$__init__$]();
