const Ψ__init__ = Symbol.for('#__init__'), Ψ__initor__ = Symbol.for('#__initor__'), Ψ__inited__ = Symbol.for('#__inited__');
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
class GlobalOptions {
	[Ψ__init__]($$ = null){
		this.incoming = $$ ? $$.incoming : undefined;
		
	}
	/**
	@param {Boolean} help
	@param {Boolean} quiet
	@param {Boolean} noInteraction
	@param {String} env
	*/
	constructor(help = false,quiet = false,noInteraction = false,env = null){
		this[Ψ__init__]();
		this.help = help;
		this.quiet = quiet;
		this.noInteraction = noInteraction;
		this.env = env;
		
		this.incoming = process.argv.slice(2).filter(function(arg) {
			
			return !(['--help','-h','--quiet','-q','--no-interaction','-n'].includes(arg));
		});
	}
};
exports.default = GlobalOptions;
