drawAxis(x="auto", y="auto", color="black") {
	this.ctx.fillStyle = color
	if (x == "auto") {
		x = this.width / 2
	}
	if (y == "auto") {
		y = this.height / 2
	}
	this.mainVector = [x, y]
	// x axis
	this.ctx.fillRect(0, y, this.width, 1)
	// y axis
	this.ctx.fillRect(x, 0, 1, this.height)
}
