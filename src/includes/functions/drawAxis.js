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
	this.ctx.beginPath();
	this.ctx.moveTo(0, y);
	this.ctx.lineTo(this.width, y)
	this.ctx.fill()
	this.ctx.stroke()
	// y axis
	this.ctx.beginPath();
	this.ctx.moveTo(x, 0);
	this.ctx.lineTo(x, this.height)
	this.ctx.fill()
	this.ctx.stroke()
}
