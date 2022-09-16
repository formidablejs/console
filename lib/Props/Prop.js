const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $__initor__$ = Symbol.for('#__initor__'), $__inited__$ = Symbol.for('#__inited__'), $__hooks__$ = Symbol.for('#__hooks__');
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
class Prop {
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.required) !== undefined && (this.required = $1);
		($1 = $$.propDescription) !== undefined && (this.propDescription = $1);
		($1 = $$.propAlias) !== undefined && (this.propAlias = $1);
		($1 = $$.propAliasOptions) !== undefined && (this.propAliasOptions = $1);
		($1 = $$.propAliasDefaults) !== undefined && (this.propAliasDefaults = $1);
		
	}
	constructor($$ = null){
		this[$__init__$]($$);
	}
	[$__init__$]($$ = null,deep = true){
		var $2;
		this.required = $$ ? $$.required : undefined;
		this.propDescription = $$ ? $$.propDescription : undefined;
		this.propAlias = $$ ? $$.propAlias : undefined;
		this.propAliasOptions = ($$ && ($2 = $$.propAliasOptions) !== undefined) ? ($2) : [];
		this.propAliasDefaults = ($$ && ($2 = $$.propAliasDefaults) !== undefined) ? ($2) : [];
		
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
		 * Prop alias options.
		 *
		 * @type {Array}
		 */
	
	/**
		 * Prop alias defaults.
		 *
		 * @type {Array}
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
		 * @param {String|Array} alias
		 */
	
	/**
	*
		 * Set prop alias.
		 *
		 * @param {String|Array} alias
		 
	@param {String|Array} alias
	*/
	alias(alias){
		
		if (typeof alias === 'string' && alias.length !== 1) {
			
			throw new RangeError('Alias length must be 1');
		};
		
		if (typeof alias === 'object' && !(Array.isArray(alias))) {
			
			this.propAlias = Object.keys(alias)[0];
			this.propAliasOptions = Object.keys(alias);
			this.propAliasDefaults = Object.values(alias);
		} else {
			
			this.propAlias = alias;
		};
		
		return this;
	}
};
exports.default = Prop;
