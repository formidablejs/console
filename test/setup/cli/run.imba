import { Application, Command, Prop } from '../../../src'

class HelloCommand < Command
	get signature
		'hello {name}'

	get props
		{
			name: Prop.string!.description('Your name')
		}

	def handle
		this.write("Hello {self.argument('name')}")

const app = new Application('Console', '1.0')

app.register(HelloCommand)

app.onDefaultCommand do(option)
	console.log '681c7325-300a-4867-95b2-1e7f1846413a'

app.run!