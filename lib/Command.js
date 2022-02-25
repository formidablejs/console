function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};
const Ψ_globalOptions = Symbol.for('#_globalOptions'), Ψ__init__ = Symbol.for('#__init__'), Ψ__initor__ = Symbol.for('#__initor__'), Ψ__inited__ = Symbol.for('#__inited__');
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var _$Signatureφ = requireDefault$__(require('./Utils/Signature'/*$path$*/));
var _$Outputφ = requireDefault$__(require('./Output'/*$path$*/));
class Command {
	constructor($$ = null){
		this[Ψ__init__]($$);
	}
	[Ψ__init__]($$ = null){
		var vφ;
		this[Ψ_globalOptions] = $$ ? $$[Ψ_globalOptions] : undefined;
		this.options = $$ ? $$.options : undefined;
		this._incoming = ($$ && (vφ = $$._incoming) !== undefined) ? (vφ) : {args: {},opts: {}};
		
	}
	/**
		 * Register as a default command.
		 *
		 * @type {Boolean|null}
		 */
	
	/**
	*
		 * Register as a default command.
		 *
		 * @type {Boolean|null}
		 
	*/
	get default(){
		
		return null;
	}
	
	/**
		 * The name and signature of the console command.
		 *
		 * @type {String}
		 */
	
	/**
	*
		 * The name and signature of the console command.
		 *
		 * @type {String}
		 
	*/
	get signature(){
		
		return null;
	}
	
	/**
		 * Command props.
		 *
		 * @type {Object}
		 */
	
	/**
	*
		 * Command props.
		 *
		 * @type {Object}
		 
	*/
	get props(){
		
		return {};
	}
	
	/**
		 * The console command description.
		 *
		 * @type {String}
		 */
	
	/**
	*
		 * The console command description.
		 *
		 * @type {String}
		 
	*/
	get description(){
		
		return null;
	}
	
	/**
		 * Command options.
		 *
		 * @type {CommandOptions}
		 */
	
	/**
		 * Incoming arguments and options.
		 *
		 * @type {Object}
		 */
	
	/**
		 * Global options.
		 *
		 * @var {GlobalOptions|null}
		 */
	
	/**
	*
		 * Global options.
		 *
		 * @var {GlobalOptions|null}
		 
	*/
	get globalOptions(){
		
		return this[Ψ_globalOptions];
	}
	
	/**
		 * Set global options.
		 *
		 * @param {GlobalOptions} options
		 * @returns {Command}
		 */
	
	/**
	*
		 * Set global options.
		 *
		 * @param {GlobalOptions} options
		 * @returns {Command}
		 
	@param {GlobalOptions} globalOptions
	*/
	setGlobalOptions(globalOptions){
		
		this[Ψ_globalOptions] = globalOptions;
		
		return this;
	}
	
	/**
		 * Get command name.
		 *
		 * @returns {String|null}
		 */
	
	/**
	*
		 * Get command name.
		 *
		 * @returns {String|null}
		 
	*/
	getName(){
		
		return (this.signature.split(' ')[0] != null) ? this.signature.split(' ')[0] : null;
	}
	
	/**
		 * Get command group.
		 *
		 * @returns {String|null}
		 */
	
	/**
	*
		 * Get command group.
		 *
		 * @returns {String|null}
		 
	*/
	getGroup(){
		
		const name = this.getName();
		
		let group = null;
		
		if (name && name.includes(':')) { group = name.split(':')[0] };
		
		return group;
	}
	
	/**
		 * Get registered arguments.
		 *
		 * @returns {CommandArgument[]}
		 */
	
	/**
	*
		 * Get registered arguments.
		 *
		 * @returns {CommandArgument[]}
		 
	*/
	args(){
		
		return _$Signatureφ.default.raw(this).filter(function(arg) { return arg.flag === 'argument'; });
	}
	
	/**
		 * Get registered options.
		 *
		 * @returns {CommandOption[]}
		 */
	
	/**
	*
		 * Get registered options.
		 *
		 * @returns {CommandOption[]}
		 
	*/
	opts(){
		
		return _$Signatureφ.default.raw(this).filter(function(arg) { return arg.flag === 'option'; });
	}
	
	/**
		 * Write error message.
		 *
		 * @param {String} message
		 * @returns {never}
		 */
	
	/**
	*
		 * Write error message.
		 *
		 * @param {String} message
		 * @returns {never}
		 
	@param {String} message
	*/
	error(message){
		
		return _$Outputφ.default.error(message);
	}
	
	/**
		 * Write line message.
		 *
		 * @param {String} message
		 * @returns {void}
		 */
	
	/**
	*
		 * Write line message.
		 *
		 * @param {String} message
		 * @returns {void}
		 
	@param {any} line
	*/
	line(line){
		
		return _$Outputφ.default.line(line);
	}
	
	/**
		 * Write formatted message.
		 *
		 * @param {String} message
		 * @returns {void}
		 */
	
	/**
	*
		 * Write formatted message.
		 *
		 * @param {String} message
		 * @returns {void}
		 
	@param {any} message
	*/
	write(message){
		
		return _$Outputφ.default.write(message);
	}
	
	/**
		 * Write line message.
		 *
		 * @param {String} message
		 * @returns {void}
		 */
	
	/**
	*
		 * Write line message.
		 *
		 * @param {String} message
		 * @returns {void}
		 
	@param {String} line
	*/
	info(line){
		
		return _$Outputφ.default.success(line);
	}
	
	/**
		 * Write table.
		 *
		 * @param {Array} object
		 * @returns {void}
		 */
	
	/**
	*
		 * Write table.
		 *
		 * @param {Array} object
		 * @returns {void}
		 
	@param {Array} object
	*/
	table(object){
		
		return _$Outputφ.default.table(object);
	}
	
	/**
		 * Get incoming argument.
		 *
		 * @param {String} name
		 * @param {mixed} default
		 * @returns {mixed}
		 */
	
	/**
	*
		 * Get incoming argument.
		 *
		 * @param {String} name
		 * @param {mixed} default
		 * @returns {mixed}
		 
	@param {String} name
	@param {any} default
	*/
	argument(name,default$ = null){
		
		return _$Signatureφ.default.get(this,'args',name,default$);
	}
	
	/**
		 * Get incoming option.
		 *
		 * @param {String} name
		 * @param {mixed} default
		 * @returns {mixed}
		 */
	
	/**
	*
		 * Get incoming option.
		 *
		 * @param {String} name
		 * @param {mixed} default
		 * @returns {mixed}
		 
	@param {String} name
	@param {any} default
	*/
	option(name,default$ = null){
		
		return _$Signatureφ.default.get(this,'opts',name,default$);
	}
	
	/**
		 * Execute the console command.
		 *
		 * @returns {mixed}
		 */
	
	/**
	*
		 * Execute the console command.
		 *
		 * @returns {mixed}
		 
	*/
	handle(){
		
		return 0;
	}
	
	/**
		 * Run console command handler.
		 *
		 * @returns {mixed}
		 */
	
	/**
	*
		 * Run console command handler.
		 *
		 * @returns {mixed}
		 
	@param {CommandOptions} options
	@param {GlobalOptions|null} globalOptions
	*/
	run(options,globalOptions){
		
		this.options = options;
		
		this.setGlobalOptions(globalOptions);
		
		this._incoming.args = this.args();
		this._incoming.opts = this.opts();
		
		_$Signatureφ.default.checkRequiredArguments(this,options);
		_$Signatureφ.default.resolveArguments(this,options);
		_$Signatureφ.default.resolveOptions(this,options);
		_$Signatureφ.default.checkRequiredOptions(this);
		
		const results = this.handle();
		
		if (!(isNaN(results))) { process.exitCode = Number(results) };
		
		return results;
	}
};
exports.default = Command;
