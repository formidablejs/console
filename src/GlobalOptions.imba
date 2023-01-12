export default class GlobalOptions

	prop incoming\string[]

	def constructor help\boolean = false, quiet\boolean = false, noInteraction\boolean = false, env\string = null, noAnsi\boolean = false, verbose = 1
		self.help = help
		self.quiet = quiet
		self.noInteraction = noInteraction
		self.env = env
		self.noAnsi = noAnsi
		self.verbose = verbose

		self.incoming = process.argv.slice(2).filter do(arg)
			!['--help', '-h', '--quiet', '-q', '--no-interaction', '-n', 'env', '--no-ansi', '-v', '-vv', '-vvv', '-verbose'].includes arg
