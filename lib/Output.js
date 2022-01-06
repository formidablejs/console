function iter$__(a){ let v; return a ? ((v=a.toIterable) ? v.call(a) : a) : []; };
Object.defineProperty(exports, "__esModule", {value: true});

/*body*/
var _$consoleφ = require('console'/*$path$*/);
var _$streamφ = require('stream'/*$path$*/);

class Output {
	
	
	/**
	@param {Array} array
	*/
	static table(array,results = ''){
		
		const transform = new _$streamφ.Transform({
			transform: function(chunk,enc,cb) { return cb(null,chunk); }
		});
		
		const logger = new _$consoleφ.Console({stdout: transform});
		
		logger.table(array);
		
		const table = (transform.read() || '').toString();
		
		for (let iφ = 0, itemsφ = iter$__(table.split(/[\r\n]+/)), lenφ = itemsφ.length; iφ < lenφ; iφ++) {
			let row = itemsφ[iφ];
			let r = row.replace(/[^┬]*┬/,'┌');
			r = r.replace(/^├─*┼/,'├');
			r = r.replace(/│[^│]*/,'');
			r = r.replace(/^└─*┴/,'└');
			r = r.replace(/'/g,' ');
			results += ("" + r + "\n");
		};
		
		return console.log(results.replace(/\r?\n?[^\r\n]*$/,'').replace(/\r?\n?[^\r\n]*$/,''));
	}
	
	/**
		 * Write line with templating support.
		 *
		 * @param {String} line
		 * @returns {void}
		 */
	
	/**
	*
		 * Write line with templating support.
		 *
		 * @param {String} line
		 * @returns {void}
		 
	@param {String} line
	*/
	static write(line){
		
		/** set black background. */
		
		line = line.replace(/<bg:black>([\s\S]*?)<\/bg:black>/g,"\x1b[40m$1\x1b[0m");
		
		/** set blue background. */
		
		line = line.replace(/<bg:blue>([\s\S]*?)<\/bg:blue>/g,"\x1b[44m$1\x1b[0m");
		
		/** set cyan background. */
		
		line = line.replace(/<bg:cyan>([\s\S]*?)<\/bg:cyan>/g,"\x1b[46m$1\x1b[0m");
		
		/** set green background. */
		
		line = line.replace(/<bg:green>([\s\S]*?)<\/bg:green>/g,"\x1b[42m$1\x1b[0m");
		
		/** set magenta background. */
		
		line = line.replace(/<bg:magenta>([\s\S]*?)<\/bg:magenta>/g,"\x1b[45m$1\x1b[0m");
		
		/** set red background. */
		
		line = line.replace(/<bg:red>([\s\S]*?)<\/bg:red>/g,"\x1b[41m$1\x1b[0m");
		
		/** set white background. */
		
		line = line.replace(/<bg:white>([\s\S]*?)<\/bg:white>/g,"\x1b[47m$1\x1b[0m");
		
		/** set yellow background. */
		
		line = line.replace(/<bg:yellow>([\s\S]*?)<\/bg:yellow>/g,"\x1b[43m$1\x1b[0m");
		
		/** set black color. */
		
		line = line.replace(/<fg:black>([\s\S]*?)<\/fg:black>/g,"\x1b[30m$1\x1b[0m");
		
		/** set blue color. */
		
		line = line.replace(/<fg:blue>([\s\S]*?)<\/fg:blue>/g,"\x1b[34m$1\x1b[0m");
		
		/** set cyan color. */
		
		line = line.replace(/<fg:cyan>([\s\S]*?)<\/fg:cyan>/g,"\x1b[36m$1\x1b[0m");
		
		/** set green color. */
		
		line = line.replace(/<fg:green>([\s\S]*?)<\/fg:green>/g,"\x1b[32m$1\x1b[0m");
		
		/** set magenta color. */
		
		line = line.replace(/<fg:magenta>([\s\S]*?)<\/fg:magenta>/g,"\x1b[35m$1\x1b[0m");
		
		/** set red color. */
		
		line = line.replace(/<fg:red>([\s\S]*?)<\/fg:red>/g,"\x1b[31m$1\x1b[0m");
		
		/** set white color. */
		
		line = line.replace(/<fg:white>([\s\S]*?)<\/fg:white>/g,"\x1b[37m$1\x1b[0m");
		
		/** set yellow color. */
		
		line = line.replace(/<fg:yellow>([\s\S]*?)<\/fg:yellow>/g,"\x1b[33m$1\x1b[0m");
		
		/** make text dim. */
		
		line = line.replace(/<dim>([\s\S]*?)<\/dim>/g,"\x1b[2m$1\x1b[0m");
		
		/** underline text. */
		
		line = line.replace(/<u>([\s\S]*?)<\/u>/g,"\x1b[4m$1\x1b[0m");
		
		return console.log(line);
	}
	
	/**
		 * Write raw line.
		 *
		 * @param {String} line
		 * @returns {void}
		 */
	
	/**
	*
		 * Write raw line.
		 *
		 * @param {String} line
		 * @returns {void}
		 
	@param {String} line
	*/
	static line(line){
		
		return console.log(line);
	}
	
	/**
		 * Write success line.
		 *
		 * @param {String} line
		 * @returns {void}
		 */
	
	/**
	*
		 * Write success line.
		 *
		 * @param {String} line
		 * @returns {void}
		 
	@param {String} line
	*/
	static success(line){
		
		return Output.write(("<fg:green>" + line + "</fg:green>"));
	}
	
	/**
		 * Write error line.
		 *
		 * @param {String} line
		 * @returns {void}
		 */
	
	/**
	*
		 * Write error line.
		 *
		 * @param {String} line
		 * @returns {void}
		 
	@param {String} line
	*/
	static error(line){
		
		console.log('');
		
		let length = 0;
		
		line.split('\n').forEach(function(l) { return length = (l.length > length) ? l.length : length; });
		
		Output.write(("<bg:red>" + ' '.repeat(length + 4) + "</bg:red>"));
		
		line.split('\n').forEach(function(l) { return Output.write(("<bg:red>  " + (l + ' '.repeat(length - l.length)) + "  </bg:red>")); });
		
		Output.write(("<bg:red>" + ' '.repeat(length + 4) + "</bg:red>"));
		
		console.log('');
		
		return process.exit(1);
	}
};
exports.default = Output;
