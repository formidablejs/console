function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};
const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $__initor__$ = Symbol.for('#__initor__'), $__inited__$ = Symbol.for('#__inited__'), $__hooks__$ = Symbol.for('#__hooks__');
var $2 = Symbol();
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var $1 = requireDefault$__(require('./Prop'/*$path$*/));

class BooleanProp extends $1.default {
	static [$__init__$](){
		this.prototype[$__initor__$] = $2;
		return this;
	}
	[$__patch__$]($$ = {}){
		var $3;
		super[$__patch__$] && super[$__patch__$]($$);
		($3 = $$.type) !== undefined && (this.type = $3);
		($3 = $$.defaultValue) !== undefined && (this.defaultValue = $3);
		
	}
	constructor(){
		super(...arguments);
		super[$__init__$] || this[$__init__$]();this[$__initor__$]===$2 && (this[$__hooks__$]&&this[$__hooks__$].inited(this),this[$__inited__$] && this[$__inited__$]());
	}
	[$__init__$]($$ = null,deep = true){
		var $4;
		deep && super[$__init__$] && super[$__init__$](...arguments);
		this.type = ($$ && ($4 = $$.type) !== undefined) ? ($4) : Boolean;
		this.defaultValue = ($$ && ($4 = $$.defaultValue) !== undefined) ? ($4) : false;
		
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
exports.default = BooleanProp; BooleanProp[$__init__$]();
