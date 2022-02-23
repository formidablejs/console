const { spawnSync } = require('child_process')
const { runtime } = require('./setup/runtime')
const { cliApp } = require('./setup/cliApp')

describe('Test CLI', () => {
    it('returns help', () => {
        const help = spawnSync(runtime(), [cliApp(), '--no-ansi'])

        const output = help.stdout.toString()
        
        expect(output).toContain("Console 1.0")
    })
})