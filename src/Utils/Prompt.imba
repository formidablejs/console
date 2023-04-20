import Output from '../Output'
import readline from 'readline'

export default def prompt question\string, default = 'no', inline = false
	let response\string

	const rl = readline.createInterface({
		input: process.stdin
		output: process.stdout
	})

	rl.setPrompt(Output.style("<fg:green>{question} (yes/no)</fg:green> [{default}]:{inline ? '' : '\n>'} "))
	rl.prompt!

	new Promise do(resolve, reject)
		rl.on 'line', do(input)
			response = input.toLowerCase!
			rl.close!

		rl.on 'close', do()
			if response == 'yes' or response == 'y' or (response == '' and default == 'yes')
				response = true
			else
				response = false

			resolve(response)
