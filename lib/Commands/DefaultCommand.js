function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};
const Ψ__init__ = Symbol.for('#__init__'), Ψ__initor__ = Symbol.for('#__initor__'), Ψ__inited__ = Symbol.for('#__inited__');
var φ = Symbol();
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var _$GlobalOptionsφ = requireDefault$__(require('../GlobalOptions'/*$path$*/));
var _$Commandφ = requireDefault$__(require('../Command'/*$path$*/));
var _$Propφ = requireDefault$__(require('../Prop'/*$path$*/));
var _$Outputφ = requireDefault$__(require('../Output'/*$path$*/));

class DefaultCommand extends _$Commandφ.default {
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
		this.commands = ($$ && (vφ = $$.commands) !== undefined) ? (vφ) : {};
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
				alias: 'v',
				name: 'version',
				description: 'Display this application version'
			},
			{
				name: 'no-ansi',
				description: 'Disable ANSI output'
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
		
		return 'default {?--help} {?--version} {?--no-ansi}';
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
			help: _$Propφ.default.boolean().alias('h').default(false),
			version: _$Propφ.default.boolean().alias('v').default(false),
			'no-ansi': _$Propφ.default.boolean().default(false)
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
			
			const name = (option.alias ? (("-" + (option.alias) + ", ")) : '    ') + (("--" + (option.name))) + ((option.type && option.type == String) ? (("[=" + option.name.toUpperCase() + "]")) : '');
			
			if (name) { length = (name.length > length) ? name.length : length };
			
			const description = (option.description ? (("" + (option.description) + " ")) : '') + (option.default ? (("<fg:green>[default: " + (option.default) + "]</fg:green>")) : '');
			
			return display.push({name: name,description: description});
		});
		
		this.write(("" + (this.name) + " <fg:green>" + (this.version) + "</fg:green>\n\n<fg:green>Usage:</fg:green>\n  command [options] [arguments]\n\n<fg:green>Options:</fg:green>"));
		
		display.forEach(function(option) {
			var φ2;
			
			return self.write(("  <fg:green>" + (option.name) + "</fg:green>  " + ' '.repeat(length - option.name.length) + (((φ2 = option.description) != null) ? (φ2) : '')));
		});
		
		if (!((commands.length > 0))) { return };
		
		self.write("\n<fg:green>Available commands:</fg:green>");
		
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
		var self = this, φ3;
		
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
			
			const name = (option.alias ? (("-" + (option.alias) + ", ")) : '    ') + (("--" + (option.name))) + ((option.type && option.type == String) ? (("" + (allowed ? (("=[" + allowed + "]")) : (("[=" + option.name.toUpperCase() + "]"))))) : '');
			
			if (name) { length = (name.length > length) ? name.length : length };
			
			const description = (option.description ? (("" + (option.description) + " ")) : '') + (option.default ? (("<fg:green>[default: \"" + (option.default) + "\"]</fg:green>")) : '') + (option.multiple ? "<fg:green>[multiple]</fg:green>" : '');
			
			return display.push({name: name,description: description});
		});
		
		args.forEach(function(arg) {
			
			if (arg) { return length = (arg.name.length > length) ? arg.name.length : length };
		});
		
		if (command.description) {
			
			this.write(("<fg:green>Description:</fg:green>\n  " + (((φ3 = command.description) != null) ? (φ3) : '') + "\n"));
		};
		
		this.write(("<fg:green>Usage:</fg:green>\n  " + command.getName() + " [options] " + ((args.length > 0) ? ('-- ' + '[' + args.map(function(arg) { return (!arg.required) ? ('<dim>' + '<' + arg.name + '>' + '</dim>') : ('<' + arg.name + '>'); }).join(', ') + ']') : '') + "\n"));
		
		if (args.length > 0) {
			
			this.write("<fg:green>Arguments:</fg:green>");
			
			args.forEach(function(option) {
				var φ4;
				
				return self.write(("  <fg:green>" + (option.name) + "</fg:green>  " + ' '.repeat(length - option.name.length) + (((φ4 = option.description) != null) ? (φ4) : '')));
			});
			
			self.write('');
		};
		
		self.write("<fg:green>Options:</fg:green>");
		
		return display.forEach(function(option) {
			var φ5;
			
			return self.write(("  <fg:green>" + (option.name) + "</fg:green>  " + ' '.repeat(length - option.name.length) + (((φ5 = option.description) != null) ? (φ5) : '')));
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
	handle(){
		var self = this;
		
		const command = this.commands[this.options.name];
		
		let help = this.option('help');
		const quiet = this.option('quiet',false);
		const noInteraction = this.option('no-interaction',false);
		const env = this.option('env');
		const noAnsi = this.option('no-ansi',false);
		
		if (noAnsi) { _$Outputφ.default.noAnsi = true };
		
		if (!help && !this.options.name) { help = true };
		
		if (!command && this.options.options.length > 0) {
			
			const required = this.opts().filter(function(opt) { return opt.required; }).map(function(opt) { return '"--' + opt.name + '"'; });
			
			self.options.options.forEach(function(option) {
				
				if (!(['help','version','h','v','no-ansi'].includes(option.name))) {
					
					const expected = (required.length > 0) ? ((", expected " + ((required.length > 1) ? 'options' : 'option') + " " + required.join(', '))) : '';
					
					return self.error(("Unexpected option " + (option.assessor) + (option.name) + expected));
				};
			});
		};
		
		if (!command && self.options.name) {
			
			self.error(("Command \"" + (self.options.name) + "\" is not defined."));
		};
		
		if (self.option('version')) {
			
			self.displayVersion();
			
			return 0;
		};
		
		if (!self.options.name && help) {
			
			let groups = [];
			let length = 20;
			
			Object.keys(self.commands).forEach(function(command) {
				var φ6, φ7;
				
				const group = ((φ6 = self.commands[command].getGroup()) != null) ? (φ6) : '';
				const name = self.commands[command].getName();
				const description = ((φ7 = self.commands[command].description) != null) ? (φ7) : '';
				
				if (name) { length = (name.length > length) ? name.length : length };
				
				return groups.push({group: group,name: name,description: description});
			});
			
			groups = groups.sort(function(a,b) { return a.name.localeCompare(b.name); }).sort(function(a,b) {
				
				return (a.group == '') ? -1 : a.group.localeCompare(b.group);
			});
			
			self.displayHelp(groups,length);
			
			return 0;
		};
		
		if (self.options.name && help) {
			
			self.displayCommandHelp(command);
			
			return 0;
		};
		
		if (self.options.name && (help || quiet || noInteraction || env || noAnsi)) {
			
			return new _$GlobalOptionsφ.default(help,quiet,noInteraction,env,noAnsi);
		};
		
		if (self.options.name) { return 1 };
		
		return 0;
	}
};
exports.default = DefaultCommand; DefaultCommand[Ψ__init__]();
