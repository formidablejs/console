const { spawnSync } = require("child_process");
const { cliApp } = require("./cliApp");
const { runtime } = require("./runtime");

class Command {
    /**
     * Execute command.
     *
     * @param {string} name
     * @param {array} args
     * @returns {string} output
     */
    static call(name, args = []) {
        const app = spawnSync(runtime(), [cliApp(), ...args])

        const output = app.stderr.toString() ? app.stderr.toString() : app.stdout.toString()

        return output
    }
}

module.exports = {
    Command
}