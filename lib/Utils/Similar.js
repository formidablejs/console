Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
/**
@param {string} a
@param {string} b
*/
function similar(a,b){
	
	let match = 0;
	const minLength = (a.length > b.length) ? b.length : a.length;
	const maxLength = (a.length < b.length) ? b.length : a.length;
	
	let index = 0;
	while (index < minLength){
		
		if (a[index] == b[index]) { match++ };
		index++;
	};
	
	const weight = match / maxLength;
	
	return weight * 100;
};
exports.default = similar;
