import Output from '../Output'
import readline from 'readline'

export default def prompt question\string, default = 'no'
	let response\string

	const rl = readline.createInterface({
		input: process.stdin
		output: process.stdout
	})

	rl.setPrompt("\n\x1b[32m {question} (yes/no)\x1b[0m [{default}]:\n > ")
	rl.prompt!

	new Promise do(resolve, reject)
		rl.on 'line', do(input)
			response = input.toLowerCase!
			rl.close!

		rl.on 'close', do()
			if response == 'yes' or response == 'y'
				response = true
			else
				response = false

			resolve(response)
