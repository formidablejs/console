const { spawnSync } = require('child_process')
const { join } = require('path')

describe('Test CLI', () => {
    const cli = join(process.cwd(), 'test', 'cli', 'app.js')

    it('returns help', () => {
        const help = spawnSync('node', [cli])

        const output = help.stdout.toString()
        
        expect(output).toContain("Display this application version")
    })
})