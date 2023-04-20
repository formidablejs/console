const { Output } = require('../lib')

describe('Test Ouput', () => {
    it('should pass a valid function to group', () => {
        expect(() => {
            Output.group(() => {})
        }).not.toThrow()

        expect(() => {
            Output.group()
        }).toThrow(Error)
    })

    it('should create a group', () => {
        expect(() => {
            let groupCreated = false

            Output.group({ wide: true }, () => {
                groupCreated = Output.canAddLine() && Output.canExpand()
            })

            return groupCreated
        }).toBeTruthy()
    })

    it('should style a line', () => {
        expect(Output.style('<fg:green>Hello World</fg:green>')).toBe('\x1b[32mHello World\x1b[0m')
    })

    it('should strip ansi from a line', () => {
        const foreground = Output.style('<fg:green>Hello World</fg:green>')
        const background = Output.style('<bg:green>Hello World</bg:green>')
        const underline = Output.style('<underline>Hello World</underline>')

        expect(Output.stripAnsi(foreground)).toBe('Hello World')
        expect(Output.stripAnsi(background)).toBe('Hello World')
        expect(Output.stripAnsi(underline)).toBe('Hello World')
    })

    it.todo('should output an error')
})