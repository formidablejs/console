const { Command } = require('./setup/command')

describe('Test CLI', () => {
    it('displays cli help', () => {
        const output = Command.call('', ['--no-ansi'])

        expect(output).toContain("Console 1.0")
        expect(output).toContain("Usage:")
        expect(output).toContain("Available commands:")
    })

    it('returns hello world', () => {
        expect(Command.call('hello', ['world', '--no-ansi'])).toContain('Hello world')
    })

    it('runs onDefaultCommand event', () => {
        const output = Command.call('', ['--no-ansi'])

        expect(output).toContain("681c7325-300a-4867-95b2-1e7f1846413a")
    })

    it('doesn\'t run onDefaultCommand', () => {
        const output = Command.call('hello', ['world', '--no-ansi'])

        expect(output).not.toContain("681c7325-300a-4867-95b2-1e7f1846413a")
    })

    it('runs pre-hello event', () => {
        expect(Command.call('hello', ['world', '--no-ansi'])).toContain('Results: hello world')
    })

    it('runs hello event', () => {
        expect(Command.call('hello', ['world', '--no-ansi'])).toContain('This runs before the hello command')
    })

    it('doesn\'t run pre-hello or hello events', () => {
        expect(Command.call('foo', ['--no-ansi'])).toBe('bar')
    })
})