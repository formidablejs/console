export default def literal value\any
	try return JSON.parse(value)
	catch
		return value
