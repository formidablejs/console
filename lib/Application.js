function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};;
function iter$__(a){ let v; return a ? ((v=a.toIterable) ? v.call(a) : a) : a; };
const $applicationEvents$ = Symbol.for('#applicationEvents'), $onDefaultCommandEvents$ = Symbol.for('#onDefaultCommandEvents'), $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $__initor__$ = Symbol.for('#__initor__'), $__inited__$ = Symbol.for('#__inited__'), $__hooks__$ = Symbol.for('#__hooks__');
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var $1 = requireDefault$__(require('./Utils/literal'/*$path$*/));
var $2 = requireDefault$__(require('./Utils/Signature'/*$path$*/));
var $3 = requireDefault$__(require('./Commands/DefaultCommand'/*$path$*/));
var $4 = requireDefault$__(require('./Command'/*$path$*/));
var $5 = requireDefault$__(require('./GlobalOptions'/*$path$*/));
var $6 = requireDefault$__(require('./Output'/*$path$*/));
class Application {
	[$__patch__$]($$ = {}){
		var $7;
		($7 = $$.commands) !== undefined && (this.commands = $7);
		($7 = $$.defaultCommand) !== undefined && (this.defaultCommand = $7);
		($7 = $$.accessible) !== undefined && (this.accessible = $7);
		($7 = $$.name) !== undefined && (this.name = $7);
		($7 = $$.version) !== undefined && (this.version = $7);
		($7 = $$.signature) !== undefined && (this.signature = $7);
		($7 = $$[$applicationEvents$]) !== undefined && (this[$applicationEvents$] = $7);
		($7 = $$[$onDefaultCommandEvents$]) !== undefined && (this[$onDefaultCommandEvents$] = $7);
		
	}
	[$__init__$]($$ = null,deep = true){
		var $8;
		this.commands = ($$ && ($8 = $$.commands) !== undefined) ? ($8) : [];
		this.defaultCommand = $$ ? $$.defaultCommand : undefined;
		this.accessible = ($$ && ($8 = $$.accessible) !== undefined) ? ($8) : {};
		this.name = $$ ? $$.name : undefined;
		this.version = $$ ? $$.version : undefined;
		this.signature = $$ ? $$.signature : undefined;
		this[$applicationEvents$] = ($$ && ($8 = $$[$applicationEvents$]) !== undefined) ? ($8) : [];
		this[$onDefaultCommandEvents$] = ($$ && ($8 = $$[$onDefaultCommandEvents$]) !== undefined) ? ($8) : [];
		
	}
	/**
		 * A list of registered commands.
		 *
		 * @type {Array}
		 */
	
	/**
		 * Default command.
		 *
		 * @type {DefaultCommand}
		 */
	
	/**
		 * Accessible commands.
		 *
		 * @type {Object}
		 */
	
	/**
		 * Application name
		 *
		 * @type {String}
		 */
	
	/**
		 * Application version (semver).
		 *
		 * @type {String}
		 */
	
	/**
		 * Custom signature.
		 *
		 * @type {String|null}
		 */
	
	/**
		 * Application events.
		 *
		 * @type {Function[]|null}
		 */
	
	/**
		 * onDefaultCommand events.
		 *
		 * @type {Function[]|null}
		 */
	
	/**
		 * Instantiate console
		 *
		 * @param {String} name
		 * @param {String} version
		 */
	
	/**
	*
		 * Instantiate console
		 *
		 * @param {String} name
		 * @param {String} version
		 
	@param {String} name
	@param {String|null} version
	*/
	constructor(name,version = '1.0'){
		this[$__init__$]();
		this.name = name;
		this.version = version;
	}
	
	/**
		 * Register a new command.
		 *
		 * @param {Function} command
		 * @returns {Application}
		 */
	
	/**
	*
		 * Register a new command.
		 *
		 * @param {Function} command
		 * @returns {Application}
		 
	@param {Function} command
	*/
	register(command){
		
		this.commands.push(command);
		
		return this;
	}
	
	/**
		 * Get incoming command options.
		 *
		 * @returns {CommandOptions}
		 */
	
	/**
	*
		 * Get incoming command options.
		 *
		 * @returns {CommandOptions}
		 
	*/
	options(){
		
		const args = this.signature ? this.signature.split(' ') : process.argv.slice(2);
		
		const command = {name: null,arguments: [],options: [],recieved: ''};
		
		for (let position = 0, $9 = iter$__(args), $10 = $9.length; position < $10; position++) {
			let argument = $9[position];
			if (argument.startsWith('-')) {
				
				const name = argument.split('=')[0].slice(argument.startsWith('--') ? 2 : 1);
				const value = argument.includes('=') ? argument.split('=')[1] : true;
				const assessor = argument.startsWith('--') ? '--' : '-';
				
				if (command.options.some(function(option) { return option.name == name; }) && !([true,false].includes($1.default(value)))) {
					
					command.options.forEach(function(option,position) {
						
						const previous = command.options[position].value;
						
						command.options[position].value = Array.isArray(previous) ? previous.concat([value]) : [previous,value];
						return command.options[position].received = argument;
					});
				} else {
					
					command.options.push({name: name,value: value,assessor: assessor,received: argument});
				};
			} else {
				
				if (position == 0) {
					
					command.name = argument.trim();
				} else {
					
					command.arguments.push(argument);
					command.received = argument;
				};
			};
		};
		
		return command;
	}
	
	/**
	@param {Function} callback
	*/
	onDefaultCommand(callback){
		
		this[$onDefaultCommandEvents$].push(callback);
		
		return this;
	}
	
	/**
	@param {String} event
	@param {Function} callback
	*/
	onEvent(event,callback){
		
		this[$applicationEvents$].push({event: event,callback: callback});
		
		return this;
	}
	
	/**
	@param {String|null} signature
	*/
	async run(signature = null){
		var $20;
		
		if (signature && typeof signature == 'string') {
			
			this.signature = signature;
		};
		
		this.register($3.default);
		
		for (let $11 = 0, $12 = iter$__(this.commands), $13 = $12.length; $11 < $13; $11++) {
			let registeredCommand = $12[$11];
			if (!((registeredCommand.prototype instanceof $4.default))) { throw new Error('Invalid Command') };
			
			const command = new registeredCommand;
			
			if (command.default && this.defaultCommand === undefined) {
				
				this.defaultCommand = command;
			} else {
				
				this.accessible = Object.assign(this.accessible,{[command.getName()]: command});
			};
		};
		
		let options = this.options();
		
		const results = await this.defaultCommand.setName(this.name).setVersion(this.version).registered(this.accessible).run(options);
		
		
		if (results == 0) {
			
			for (let $14 = 0, $15 = iter$__(this[$onDefaultCommandEvents$]), $16 = $15.length; $14 < $16; $14++) {
				let event = $15[$14];
				event(options);
			};
			
			return;
		};
		
		if (options.name) {
			
			for (let $17 = 0, $18 = iter$__(this[$applicationEvents$].filter(function(event) { return event.event == ("pre-" + (options.name)); })), $19 = $18.length; $17 < $19; $17++) {
				let registered = $18[$17];
				registered.callback(options);
			};
		};
		
		if (results instanceof $5.default) {
			
			this.signature = results.incoming.join(' ');
			
			/**@type {CommandOptions}*/ /**@type {CommandOptions}*/(options) = this.options();
		};
		
		const command = this.accessible[options.name];
		
		command.run(options,(results instanceof $5.default) ? results : undefined);
		
		if (options.name) {
			
			$20 = [];
			for (let $21 = 0, $22 = iter$__(this[$applicationEvents$].filter(function(event) { return event.event == options.name; })), $23 = $22.length; $21 < $23; $21++) {
				let registered = $22[$21];
				$20.push(registered.callback(options,results));
			};
			return $20;
		};
	}
};
exports.default = Application;
