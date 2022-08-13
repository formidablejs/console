const $__init__$ = Symbol.for('#__init__'), $__patch__$ = Symbol.for('#__patch__'), $__initor__$ = Symbol.for('#__initor__'), $__inited__$ = Symbol.for('#__inited__'), $__hooks__$ = Symbol.for('#__hooks__');
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
class GlobalOptions {
	[$__patch__$]($$ = {}){
		var $1;
		($1 = $$.incoming) !== undefined && (this.incoming = $1);
		
	}
	[$__init__$]($$ = null,deep = true){
		this.incoming = $$ ? $$.incoming : undefined;
		
	}
	/**
	@param {Boolean} help
	@param {Boolean} quiet
	@param {Boolean} noInteraction
	@param {String} env
	@param {Boolean} noAnsi
	*/
	constructor(help = false,quiet = false,noInteraction = false,env = null,noAnsi = false){
		this[$__init__$]();
		this.help = help;
		this.quiet = quiet;
		this.noInteraction = noInteraction;
		this.env = env;
		this.noAnsi = noAnsi;
		
		this.incoming = process.argv.slice(2).filter(function(arg) {
			
			return !(['--help','-h','--quiet','-q','--no-interaction','-n','env','--no-ansi'].includes(arg));
		});
	}
};
exports.default = GlobalOptions;
