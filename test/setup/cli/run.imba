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

class FooCommand < Command
	get signature
		'foo'

	def handle
		this.write("bar")

const app = new Application('Console', '1.0')

app.register(HelloCommand)
app.register(FooCommand)

app.onDefaultCommand do(option)
	console.log '681c7325-300a-4867-95b2-1e7f1846413a'

app.onEvent 'pre-hello', do(options)
	console.log 'This runs before the hello command'

app.onEvent 'hello', do(options, results)
	console.log "Results: " + results.incoming.join(' ')

app.run!