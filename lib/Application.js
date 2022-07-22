function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};;
function iter$__(a){ let v; return a ? ((v=a.toIterable) ? v.call(a) : a) : []; };
const ΨonDefaultCommandEvents = Symbol.for('#onDefaultCommandEvents'), Ψ__init__ = Symbol.for('#__init__'), Ψ__initor__ = Symbol.for('#__initor__'), Ψ__inited__ = Symbol.for('#__inited__');
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var _$literalφ = requireDefault$__(require('./Utils/literal'/*$path$*/));
var _$Signatureφ = requireDefault$__(require('./Utils/Signature'/*$path$*/));
var _$DefaultCommandφ = requireDefault$__(require('./Commands/DefaultCommand'/*$path$*/));
var _$Commandφ = requireDefault$__(require('./Command'/*$path$*/));
var _$GlobalOptionsφ = requireDefault$__(require('./GlobalOptions'/*$path$*/));
var _$Outputφ = requireDefault$__(require('./Output'/*$path$*/));
class Application {
	[Ψ__init__]($$ = null){
		var vφ;
		this.commands = ($$ && (vφ = $$.commands) !== undefined) ? (vφ) : [];
		this.defaultCommand = $$ ? $$.defaultCommand : undefined;
		this.accessible = ($$ && (vφ = $$.accessible) !== undefined) ? (vφ) : {};
		this.name = $$ ? $$.name : undefined;
		this.version = $$ ? $$.version : undefined;
		this.signature = $$ ? $$.signature : undefined;
		this[ΨonDefaultCommandEvents] = ($$ && (vφ = $$[ΨonDefaultCommandEvents]) !== undefined) ? (vφ) : [];
		
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
		this[Ψ__init__]();
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
		
		const command = {name: null,arguments: [],options: []};
		
		for (let position = 0, itemsφ = iter$__(args), lenφ = itemsφ.length; position < lenφ; position++) {
			let argument = itemsφ[position];
			if (argument.startsWith('-')) {
				
				const name = argument.split('=')[0].slice(argument.startsWith('--') ? 2 : 1);
				const value = argument.includes('=') ? argument.split('=')[1] : true;
				const assessor = argument.startsWith('--') ? '--' : '-';
				
				if (command.options.some(function(option) { return option.name == name; }) && !([true,false].includes(_$literalφ.default(value)))) {
					
					command.options.forEach(function(option,position) {
						
						const previous = command.options[position].value;
						
						return command.options[position].value = Array.isArray(previous) ? previous.concat([value]) : [previous,value];
					});
				} else {
					
					command.options.push({name: name,value: value,assessor: assessor});
				};
			} else {
				
				if (position == 0) {
					
					command.name = argument.trim();
				} else {
					
					command.arguments.push(argument);
				};
			};
		};
		
		return command;
	}
	
	/**
	@param {Function} callback
	*/
	onDefaultCommand(callback){
		
		this[ΨonDefaultCommandEvents].push(callback);
		
		return this;
	}
	
	/**
	@param {String|null} signature
	*/
	run(signature = null){
		
		if (signature && typeof signature == 'string') {
			
			this.signature = signature;
		};
		
		this.register(_$DefaultCommandφ.default);
		
		for (let iφ = 0, itemsφ2 = iter$__(this.commands), lenφ2 = itemsφ2.length; iφ < lenφ2; iφ++) {
			let registeredCommand = itemsφ2[iφ];
			if (!((registeredCommand.prototype instanceof _$Commandφ.default))) { throw new Error('Invalid Command') };
			
			const command = new registeredCommand;
			
			if (command.default && this.defaultCommand === undefined) {
				
				this.defaultCommand = command;
			} else {
				
				this.accessible = Object.assign(this.accessible,{[command.getName()]: command});
			};
		};
		
		let options = this.options();
		
		const results = this.defaultCommand.setName(this.name).setVersion(this.version).registered(this.accessible).run(options);
		
		
		if (results == 0) {
			
			for (let iφ2 = 0, itemsφ3 = iter$__(this.onDefaultCommandEvents), lenφ3 = itemsφ3.length; iφ2 < lenφ3; iφ2++) {
				let event = itemsφ3[iφ2];
				event(options);
			};
			
			return;
		};
		
		if (results instanceof _$GlobalOptionsφ.default) {
			
			this.signature = results.incoming.join(' ');
			
			/**@type {CommandOptions}*/ /**@type {CommandOptions}*/(options) = this.options();
		};
		
		const command = this.accessible[options.name];
		
		return command.run(options,(results instanceof _$GlobalOptionsφ.default) ? results : undefined);
	}
};
exports.default = Application;

