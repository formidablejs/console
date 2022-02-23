const { Application, Command } = require('../../lib')

class HelloCommand extends Command {
    get signature() {
        return "hello {name}"
    }

    handle() {
        this.info(`Hello ${this.argument('name')}`)
    }
}

const app = new Application('Console App', '1.0')

app.register(HelloCommand)
app.run()