export default class GlobalOptions

	prop incoming\String[]

	def constructor help\Boolean = false, quiet\Boolean = false, noInteraction\Boolean = false, env\String = null, noAnsi\Boolean = false, verbose = 1
		self.help = help
		self.quiet = quiet
		self.noInteraction = noInteraction
		self.env = env
		self.noAnsi = noAnsi
		self.verbose = verbose

		self.incoming = process.argv.slice(2).filter do(arg)
			!['--help', '-h', '--quiet', '-q', '--no-interaction', '-n', 'env', '--no-ansi', '-v', '-vv', '-vvv', '-verbose'].includes arg
