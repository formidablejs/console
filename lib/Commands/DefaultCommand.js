function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};;
function iter$__(a){ let v; return a ? ((v=a.toIterable) ? v.call(a) : a) : a; };
const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $__initor__$ = Symbol.for('#__initor__'), $__inited__$ = Symbol.for('#__inited__'), $__hooks__$ = Symbol.for('#__hooks__');
var $7 = Symbol();
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var $1 = requireDefault$__(require('../GlobalOptions'/*$path$*/));
var $2 = requireDefault$__(require('../Command'/*$path$*/));
var $3 = requireDefault$__(require('../Prop'/*$path$*/));
var $4 = requireDefault$__(require('../Output'/*$path$*/));
var $5 = requireDefault$__(require('../Utils/Similar'/*$path$*/));
var $6 = requireDefault$__(require('../Utils/Prompt'/*$path$*/));

class DefaultCommand extends $2.default {
	static [$__init__$](){
		this.prototype[$__initor__$] = $7;
		return this;
	}
	[$__patch__$]($$ = {}){
		var $8;
		super[$__patch__$] && super[$__patch__$]($$);
		($8 = $$.commands) !== undefined && (this.commands = $8);
		($8 = $$.name) !== undefined && (this.name = $8);
		($8 = $$.version) !== undefined && (this.version = $8);
		
	}
	constructor(){
		super(...arguments);
		super[$__init__$] || this[$__init__$]();this[$__initor__$]===$7 && (this[$__hooks__$]&&this[$__hooks__$].inited(this),this[$__inited__$] && this[$__inited__$]());
	}
	[$__init__$]($$ = null,deep = true){
		var $9;
		deep && super[$__init__$] && super[$__init__$](...arguments);
		this.commands = ($$ && ($9 = $$.commands) !== undefined) ? ($9) : {};
		this.name = $$ ? $$.name : undefined;
		this.version = $$ ? $$.version : undefined;
		
	}
	/**
		 * A list of registered commands.
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
		 * A list of help options.
		 *
		 * @type {{}[]}
		 */
	
	/**
	*
		 * A list of help options.
		 *
		 * @type {{}[]}
		 
	*/
	get helpOptions(){
		
		return [
			{
				alias: 'h',
				name: 'help',
				description: 'Display help for the given command. When no command is given display help for the <fg:green>list</fg:green> command'
			},
			{
				alias: 'V',
				name: 'version',
				description: 'Display this application version'
			},
			{
				name: 'no-ansi',
				description: 'Disable ANSI output'
			},
			{
				name: 'no-interaction',
				description: 'Do not ask any interactive question'
			},
			{
				alias: {v: 1,vv: 2,vvv: 3},
				name: 'verbose',
				description: 'Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug'
			}
		];
	}
	
	/**
		 * Register as a default command.
		 *
		 * @type {Boolean}
		 */
	
	/**
	*
		 * Register as a default command.
		 *
		 * @type {Boolean}
		 
	*/
	get default(){
		
		return true;
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
		
		return 'default {?--help} {?--version} {?--no-ansi} {?--no-interaction} {?--verbose}';
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
		
		return {
			help: $3.default.boolean().alias('h').default(false),
			version: $3.default.boolean().alias('V').default(false),
			verbose: $3.default.boolean().alias({v: 1,vv: 2,vvv: 3}).default(true),
			'no-ansi': $3.default.boolean().default(false),
			'no-interaction': $3.default.boolean().default(false)
		};
	}
	
	/**
		 * Set application name.
		 *
		 * @param {String} name
		 * @returns {DefaultCommand}
		 */
	
	/**
	*
		 * Set application name.
		 *
		 * @param {String} name
		 * @returns {DefaultCommand}
		 
	@param {String} name
	*/
	setName(name){
		
		this.name = name;
		
		return this;
	}
	
	/**
		 * Set application version.
		 *
		 * @param {String} version
		 * @returns {DefaultCommand}
		 */
	
	/**
	*
		 * Set application version.
		 *
		 * @param {String} version
		 * @returns {DefaultCommand}
		 
	@param {String} version
	*/
	setVersion(version){
		
		this.version = version;
		
		return this;
	}
	
	/**
		 * Set registered commands.
		 *
		 * @param {String} version
		 * @returns {DefaultCommand}
		 */
	
	/**
	*
		 * Set registered commands.
		 *
		 * @param {String} version
		 * @returns {DefaultCommand}
		 
	@param {Command[]} commands
	*/
	registered(commands){
		
		this.commands = commands;
		
		return this;
	}
	
	/**
	@param {Array} commands
	@param {Number} length
	*/
	displayHelp(commands,length){
		var self = this;
		
		let display = [];
		
		this.helpOptions.forEach(function(option) {
			
			let alias = option.alias;
			
			if (typeof option.alias === 'object' && !(Array.isArray(option.alias)) && option.alias) {
				
				alias = Object.keys(option.alias).join('|');
			};
			
			const name = (option.alias ? (("-" + alias + ", ")) : '    ') + (("--" + (option.name))) + ((option.type && option.type == String) ? (("[=" + option.name.toUpperCase() + "]")) : '');
			
			if (name) { length = (name.length > length) ? name.length : length };
			
			const description = (option.description ? (("" + (option.description) + " ")) : '') + (option.default ? (("<fg:green>[default: " + (option.default) + "]</fg:green>")) : '');
			
			return display.push({name: name,description: description});
		});
		
		this.write(("" + (this.name) + " <fg:green>" + (this.version) + "</fg:green>\n\n<fg:green>Usage:</fg:green>\n  command [options] [arguments]\n\n<fg:green>Options:</fg:green>"));
		
		display.forEach(function(option) {
			var $10;
			
			return self.write(("  <fg:green>" + (option.name) + "</fg:green>  " + ' '.repeat(length - option.name.length) + ((($10 = option.description) != null) ? ($10) : '')));
		});
		
		if (!((commands.length > 0))) { return };
		
		this.write("\n<fg:green>Available commands:</fg:green>");
		
		let previous = '';
		
		return commands.forEach(function(command) {
			
			if (previous !== command.group) {
				
				self.write((" <fg:green>" + (command.group) + "</fg:green>"));
			};
			
			previous = command.group;
			
			length - command.name.length;
			
			return self.write(("  <fg:green>" + (command.name) + "  " + ' '.repeat(length - command.name.length) + "</fg:green>" + (command.description)));
		});
	}
	
	/**
	@param {Command} command
	*/
	displayCommandHelp(command){
		var self = this, $11;
		
		const options = command.opts().map(function(opt) {
			
			return {
				alias: opt.alias,
				name: opt.name,
				description: (opt.description && typeof opt.description == 'string') ? opt.description.trim() : null,
				type: opt.type,
				'default': opt.default,
				allowed: (opt.prop && Array.isArray(opt.prop.allowed)) ? opt.prop.allowed : null,
				multiple: opt.prop && opt.prop.multiple
			};
		}).concat(this.helpOptions);
		
		const args = command.args().map(function(arg) { return {
			name: arg.name,
			description: arg.description,
			required: arg.required
		}; });
		
		let length = 20;
		let display = [];
		
		options.forEach(function(option) {
			
			const allowed = Array.isArray(option.allowed) ? option.allowed.join('|') : null;
			
			let alias = option.alias;
			
			if (typeof option.alias === 'object' && !(Array.isArray(option.alias)) && option.alias) {
				
				alias = Object.keys(option.alias).join('|');
			};
			
			const name = (option.alias ? (("-" + alias + ", ")) : '    ') + (("--" + (option.name))) + ((option.type && option.type == String) ? (("" + (allowed ? (("=[" + allowed + "]")) : (("[=" + option.name.toUpperCase() + "]"))))) : '');
			
			if (name) { length = (name.length > length) ? name.length : length };
			
			const description = (option.description ? (("" + (option.description) + " ")) : '') + (option.default ? (("<fg:green>[default: \"" + (option.default) + "\"]</fg:green>")) : '') + (option.multiple ? "<fg:green>[multiple]</fg:green>" : '');
			
			return display.push({name: name,description: description});
		});
		
		args.forEach(function(arg) {
			
			if (arg) { return length = (arg.name.length > length) ? arg.name.length : length };
		});
		
		if (command.description) {
			
			this.write(("<fg:green>Description:</fg:green>\n  " + ((($11 = command.description) != null) ? ($11) : '') + "\n"));
		};
		
		this.write(("<fg:green>Usage:</fg:green>\n  " + command.getName() + " [options] " + ((args.length > 0) ? ('-- ' + '[' + args.map(function(arg) { return (!arg.required) ? ('<dim>' + '<' + arg.name + '>' + '</dim>') : ('<' + arg.name + '>'); }).join(', ') + ']') : '') + "\n"));
		
		if (args.length > 0) {
			
			this.write("<fg:green>Arguments:</fg:green>");
			
			args.forEach(function(option) {
				var $12;
				
				return self.write(("  <fg:green>" + (option.name) + "</fg:green>  " + ' '.repeat(length - option.name.length) + ((($12 = option.description) != null) ? ($12) : '')));
			});
			
			this.write('');
		};
		
		this.write("<fg:green>Options:</fg:green>");
		
		return display.forEach(function(option) {
			var $13;
			
			return self.write(("  <fg:green>" + (option.name) + "</fg:green>  " + ' '.repeat(length - option.name.length) + ((($13 = option.description) != null) ? ($13) : '')));
		});
	}
	
	displayVersion(){
		
		return this.write(("" + (this.name) + " <fg:green>" + (this.version) + "</fg:green>"));
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
	async handle(){
		var self = this;
		
		let command = this.commands[this.options.name];
		
		let help = this.option('help');
		const quiet = this.option('quiet',false);
		const noInteraction = this.option('no-interaction',false);
		const env = this.option('env');
		const noAnsi = this.option('no-ansi',false);
		let verbose = 1;
		
		const verboseOption = this._incoming.opts.filter(function(opt) {
			
			return opt.name == 'verbose';
		})[0];
		
		if (verboseOption && verboseOption.received) {
			
			verbose = verboseOption.received.length - 1;
		};
		
		if (noAnsi) { $4.default.noAnsi = true };
		
		if (!help && !(this.options.name)) { help = true };
		
		if (!command && this.options.name) {
			
			const all = Object.keys(this.commands);
			
			if (this.option('no-interaction') != true) {
				
				let asked = false;
				
				for (let $14 = 0, $15 = iter$__(all), $16 = $15.length; $14 < $16; $14++) {
					let c = $15[$14];
					if ($5.default(this.options.name,c) >= 70 && asked == false) {
						
						asked = true;
						
						const response = await $6.default(("Did you mean \"" + c + "\"?"));
						
						if (response == true) {
							
							command = this.commands[c];
							this.options.name = c;
						};
						
						break;
					};
				};
			};
			
			if (!command) {
				
				this.error(("Command \"" + (this.options.name) + "\" is not defined."));
			};
		};
		
		if (!command && this.options.options.length > 0) {
			
			const required = this.opts().filter(function(opt) { return opt.required; }).map(function(opt) { return '"--' + opt.name + '"'; });
			
			this.options.options.forEach(function(option) {
				
				if (!(['help','version','h','V','v','vv','vvv','verbose','no-ansi'].includes(option.name))) {
					
					const expected = (required.length > 0) ? ((", expected " + ((required.length > 1) ? 'options' : 'option') + " " + required.join(', '))) : '';
					
					return self.error(("Unexpected option " + (option.assessor) + (option.name) + expected));
				};
			});
		};
		
		if (this.option('version')) {
			
			this.displayVersion();
			
			return 0;
		};
		
		if (!(this.options.name) && help) {
			
			let all = [];
			let groups = [];
			let length = 20;
			
			Object.keys(this.commands).forEach(function(command) {
				var $17, $18;
				
				if (self.commands[command].getName() !== 'default') {
					
					const group = (($17 = self.commands[command].getGroup()) != null) ? ($17) : '';
					const name = self.commands[command].getName();
					const description = (($18 = self.commands[command].description) != null) ? ($18) : '';
					
					if (name) { length = (name.length > length) ? name.length : length };
					
					return (group == '') ? ((all.push({group: group,name: name,description: description}))) : groups.push({group: group,name: name,description: description});
				};
			});
			
			all = all.sort(function(a,b) { return a.name.localeCompare(b.name); });
			groups = groups.sort(function(a,b) { return a.name.localeCompare(b.name); });
			
			this.displayHelp(all.concat(groups),length);
			
			return 0;
		};
		
		if (this.options.name && help) {
			
			this.displayCommandHelp(command);
			
			return 0;
		};
		
		if (this.options.name && (help || quiet || noInteraction || env || noAnsi || verbose)) {
			
			return new $1.default(help,quiet,noInteraction,env,noAnsi,verbose);
		};
		
		if (this.options.name) { return 1 };
		
		return 0;
	}
};
exports.default = DefaultCommand; DefaultCommand[$__init__$]();
