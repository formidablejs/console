const { join } = require("path")

const runtime = () => join(process.cwd(), 'node_modules', '.bin', 'ir')

module.exports = {
    runtime
}