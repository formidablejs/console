type CommandArgument {
	position: Number,
	name: String,
	default: any,
	description: String|null,
	type: String,
	required: Boolean,
	flag: String,
	alias: String|null,
}

export default CommandArgument;
