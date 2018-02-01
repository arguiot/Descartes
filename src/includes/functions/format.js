format(x, y) {
	if (x.length != y.length) {
		throw "x array and y array don't have the same length"
		return 0;
	}
	let obj = {}
	for (let i in x) {
		obj[x[i]] = y[i]
	}
	return obj;
}
