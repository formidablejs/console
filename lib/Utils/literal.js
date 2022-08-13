Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
/**
@param {any} value
*/
function literal(value){
	
	try {
		return JSON.parse(value);
	} catch ($1) {
		
		return value;
	};
};
exports.default = literal;
