# Regular expression for matching ANSI escape codes.
#
# Adapted from https://github.com/chalk/ansi-regex
# All credit goes to the original authors and maintainers.
#
# @see https://github.com/chalk/ansi-regex/blob/main/index.js

export def ansiRegex
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))'
	].join('|')

	new RegExp(pattern, 'g')
