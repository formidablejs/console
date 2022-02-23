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
})