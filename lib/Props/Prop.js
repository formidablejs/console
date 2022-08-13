const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $__initor__$ = Symbol.for('#__initor__'), $__inited__$ = Symbol.for('#__inited__'), $__hooks__$ = Symbol.for('#__hooks__');
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
class Prop {
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.required) !== undefined && (this.required = $1);
		($1 = $$.propDescription) !== undefined && (this.propDescription = $1);
		($1 = $$.propAlias) !== undefined && (this.propAlias = $1);
		
	}
	constructor($$ = null){
		this[$__init__$]($$);
	}
	[$__init__$]($$ = null,deep = true){
		this.required = $$ ? $$.required : undefined;
		this.propDescription = $$ ? $$.propDescription : undefined;
		this.propAlias = $$ ? $$.propAlias : undefined;
		
	}
	/**
		 * Whether prop is required or not.
		 *
		 * @type {Boolean}
		 */
	
	/**
		 * Prop description.
		 *
		 * @type {String}
		 */
	
	/**
		 * Prop alias.
		 *
		 * @type {String}
		 */
	
	/**
		 * Mark as nullable.
		 *
		 * @param {Boolean} isNullable
		 */
	
	/**
	*
		 * Mark as nullable.
		 *
		 * @param {Boolean} isNullable
		 
	@param {Boolean} isNullable
	*/
	nullable(isNullable = true){
		
		this.required = !isNullable;
		
		return this;
	}
	
	/**
		 * Set prop description.
		 *
		 * @param {String} description
		 */
	
	/**
	*
		 * Set prop description.
		 *
		 * @param {String} description
		 
	@param {String} description
	*/
	description(description){
		
		this.propDescription = description;
		
		return this;
	}
	
	/**
		 * Set prop alias.
		 *
		 * @param {String} alias
		 */
	
	/**
	*
		 * Set prop alias.
		 *
		 * @param {String} alias
		 
	@param {String} alias
	*/
	alias(alias){
		
		if (alias.length !== 1) { throw new RangeError('Alias length must be 1') };
		
		this.propAlias = alias;
		
		return this;
	}
};
exports.default = Prop;
