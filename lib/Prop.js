function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var _$OptionsPropφ = requireDefault$__(require('./Props/OptionsProp'/*$path$*/));
var _$StringPropφ = requireDefault$__(require('./Props/StringProp'/*$path$*/));
var _$BooleanPropφ = requireDefault$__(require('./Props/BooleanProp'/*$path$*/));
var _$NumberPropφ = requireDefault$__(require('./Props/NumberProp'/*$path$*/));

class Prop {
	
	
	static boolean(){
		
		return new _$BooleanPropφ.default;
	}
	
	static number(){
		
		return new _$NumberPropφ.default;
	}
	
	static string(){
		
		return new _$StringPropφ.default;
	}
	
	static options(){
		
		return new _$OptionsPropφ.default;
	}
};
exports.default = Prop;
