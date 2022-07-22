const { Command } = require('./setup/command')

describe('Test CLI', () => {
    it('displays cli help', () => {
        const output = Command.call('', ['--no-ansi'])

        expect(output).toContain("Console 1.0")
        expect(output).toContain("Usage:")
        expect(output).toContain("Available commands:")
    })

    it('returns hello world', () => {
        expect(Command.call('hello', ['world', '--no-ansi'])).toBe('Hello world')
    })

    it('runs event', () => {
        const output = Command.call('', ['--no-ansi'])

        expect(output).toContain("681c7325-300a-4867-95b2-1e7f1846413a")
    })

    it('doesn\'t run event', () => {
        const output = Command.call('hello', ['world', '--no-ansi'])

        expect(output).not.toContain("681c7325-300a-4867-95b2-1e7f1846413a")
    })
})