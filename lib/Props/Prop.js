const Ψ__init__ = Symbol.for('#__init__'), Ψ__initor__ = Symbol.for('#__initor__'), Ψ__inited__ = Symbol.for('#__inited__');
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
class Prop {
	constructor($$ = null){
		this[Ψ__init__]($$);
	}
	[Ψ__init__]($$ = null){
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
