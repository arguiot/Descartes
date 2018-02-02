plotF(f, width = 2, color = "black") {
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = width
    this.ctx.beginPath();
    this.ctx.moveTo(this.mainVector[0] + 0 * this.scale, this.mainVector[1] - f.core(-this.width / 2) * this.scale)
    for (var i = -this.width / 2; i < this.width; i += 0.1) {
        const y = this.mainVector[1] - f.core(i) * this.scale
        this.ctx.lineTo(this.mainVector[0] + i * this.scale, y)
        this.ctx.moveTo(this.mainVector[0] + i * this.scale, y)
    }
    this.ctx.stroke()
}
