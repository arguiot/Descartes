init(width = 200, height = 200, ext = "png") {
    this.width = width;
    this.height = height
    this.ext = ext
    this.canvas = new canvas(width, height, ext)
    this.ctx = this.canvas.getContext("2d")
    this.mainVector = [0, this.height]

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
	this.ctx.save()
}
