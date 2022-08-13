function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var $1 = requireDefault$__(require('./Props/OptionsProp'/*$path$*/));
var $2 = requireDefault$__(require('./Props/StringProp'/*$path$*/));
var $3 = requireDefault$__(require('./Props/BooleanProp'/*$path$*/));
var $4 = requireDefault$__(require('./Props/NumberProp'/*$path$*/));

class Prop {
	
	
	static boolean(){
		
		return new $3.default;
	}
	
	static number(){
		
		return new $4.default;
	}
	
	static string(){
		
		return new $2.default;
	}
	
	static options(){
		
		return new $1.default;
	}
};
exports.default = Prop;
