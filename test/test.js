const { Command } = require('./setup/command')

describe('Test CLI', () => {
    it('returns help', () => {
        const output = Command.call('', ['--no-ansi'])
        
        expect(output).toContain("Console 1.0")
    })
})