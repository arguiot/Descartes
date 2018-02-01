grid(n=10, color="grey") {
	this.ctx.fillStyle = color
	for (var i = 0; i < this.width; i += n) {
		this.ctx.fillRect(i, 0, 1, this.height)
	}
	for (var i = 0; i < this.height; i += n) {
		this.ctx.fillRect(0, i, this.width, 1)
	}
}
