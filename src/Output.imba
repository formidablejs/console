import { Console } from 'console'
import { Transform } from 'stream'

export default class Output

	static def table array\Array, results = ''
		const transform = new Transform {
			transform: do(chunk, enc, cb) cb(null, chunk)
		}

		const logger = new Console { stdout: transform }

		logger.table(array)

		const table = (transform.read! || '').toString!

		for row in table.split /[\r\n]+/
			let r = row.replace(/[^┬]*┬/, '┌')
			r = r.replace(/^├─*┼/, '├')
			r = r.replace(/│[^│]*/, '')
			r = r.replace(/^└─*┴/, '└')
			r = r.replace(/'/g, ' ')
			results += "{r}\n"

		console.log results.replace(/\r?\n?[^\r\n]*$/, '').replace(/\r?\n?[^\r\n]*$/, '')

	/**
	 * Write line with templating support.
	 *
	 * @param {String} line
	 * @returns {void}
	 */
	static def write line\String
		/** set black background. */
		line = line.replace /<bg:black>([\s\S]*?)<\/bg:black>/g, "\x1b[40m$1\x1b[0m"

		/** set blue background. */
		line = line.replace /<bg:blue>([\s\S]*?)<\/bg:blue>/g, "\x1b[44m$1\x1b[0m"

		/** set cyan background. */
		line = line.replace /<bg:cyan>([\s\S]*?)<\/bg:cyan>/g, "\x1b[46m$1\x1b[0m"

		/** set green background. */
		line = line.replace /<bg:green>([\s\S]*?)<\/bg:green>/g, "\x1b[42m$1\x1b[0m"

		/** set magenta background. */
		line = line.replace /<bg:magenta>([\s\S]*?)<\/bg:magenta>/g, "\x1b[45m$1\x1b[0m"

		/** set red background. */
		line = line.replace /<bg:red>([\s\S]*?)<\/bg:red>/g, "\x1b[41m$1\x1b[0m"

		/** set white background. */
		line = line.replace /<bg:white>([\s\S]*?)<\/bg:white>/g, "\x1b[47m$1\x1b[0m"

		/** set yellow background. */
		line = line.replace /<bg:yellow>([\s\S]*?)<\/bg:yellow>/g, "\x1b[43m$1\x1b[0m"

		/** set black color. */
		line = line.replace /<fg:black>([\s\S]*?)<\/fg:black>/g, "\x1b[30m$1\x1b[0m"

		/** set blue color. */
		line = line.replace /<fg:blue>([\s\S]*?)<\/fg:blue>/g, "\x1b[34m$1\x1b[0m"

		/** set cyan color. */
		line = line.replace /<fg:cyan>([\s\S]*?)<\/fg:cyan>/g, "\x1b[36m$1\x1b[0m"

		/** set green color. */
		line = line.replace /<fg:green>([\s\S]*?)<\/fg:green>/g, "\x1b[32m$1\x1b[0m"

		/** set magenta color. */
		line = line.replace /<fg:magenta>([\s\S]*?)<\/fg:magenta>/g, "\x1b[35m$1\x1b[0m"

		/** set red color. */
		line = line.replace /<fg:red>([\s\S]*?)<\/fg:red>/g, "\x1b[31m$1\x1b[0m"

		/** set white color. */
		line = line.replace /<fg:white>([\s\S]*?)<\/fg:white>/g, "\x1b[37m$1\x1b[0m"

		/** set yellow color. */
		line = line.replace /<fg:yellow>([\s\S]*?)<\/fg:yellow>/g, "\x1b[33m$1\x1b[0m"

		/** make text dim. */
		line = line.replace /<dim>([\s\S]*?)<\/dim>/g, "\x1b[2m$1\x1b[0m"

		/** underline text. */
		line = line.replace /<u>([\s\S]*?)<\/u>/g, "\x1b[4m$1\x1b[0m"

		console.log line

	/**
	 * Write raw line.
	 *
	 * @param {String} line
	 * @returs {void}
	 */
	static def line line\String
		console.log line

	/**
	 * Write success line.
	 *
	 * @param {String} line
	 * @returs {void}
	 */
	static def success line\String
		Output.write "<fg:green>{line}</fg:green>"

	/**
	 * Write error line.
	 *
	 * @param {String} line
	 * @returs {void}
	 */
	static def error line\String
		console.log ''

		let length = 0

		line.split('\n').forEach do(l) length = l.length > length ? l.length : length

		Output.write "<bg:red>{' '.repeat(length + 4)}</bg:red>"

		line.split('\n').forEach do(l) Output.write "<bg:red>  {l + ' '.repeat(length - l.length)}  </bg:red>"

		Output.write "<bg:red>{' '.repeat(length + 4)}</bg:red>"

		console.log ''

		process.exit 1
