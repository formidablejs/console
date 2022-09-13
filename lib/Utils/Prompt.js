function requireDefault$__(obj){
	return obj && obj.__esModule ? obj : { default: obj };
};
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var $1 = requireDefault$__(require('../Output'/*$path$*/));
var $2 = requireDefault$__(require('readline'/*$path$*/));

/**
@param {string} question
*/
function prompt(question,default$ = 'no'){
	
	let response;
	
	const rl = $2.default.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	
	rl.setPrompt(("\n\x1b[32m " + question + " (yes/no)\x1b[0m [" + default$ + "]:\n > "));
	rl.prompt();
	
	return new Promise(function(resolve,reject) {
		
		rl.on('line',function(input) {
			
			response = input.toLowerCase();
			return rl.close();
		});
		
		return rl.on('close',function() {
			
			if (response == 'yes' || response == 'y') {
				
				response = true;
			} else {
				
				response = false;
			};
			
			return resolve(response);
		});
	});
};
exports.default = prompt;
