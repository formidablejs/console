const { spawnSync } = require('child_process')
const { join } = require('path')

describe('Test CLI', () => {
    const cli = join(process.cwd(), 'test', 'cli', 'app.js')

    it('returns help', () => {
        const help = spawnSync('node', [cli, '--no-ansi'])

        const output = help.stdout.toString()
        
        expect(output).toContain("Console App 1.0")
    })
})