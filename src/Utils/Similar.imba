export default def similar a\string, b\string
	let   match\number     = 0
	const minLength\number = (a.length > b.length) ? b.length : a.length
	const maxLength\number = (a.length < b.length) ? b.length : a.length

	let index\number = 0
	while index < minLength
		if a[index] == b[index] then match++
		index++

	const weight\number = match / maxLength

	weight * 100
