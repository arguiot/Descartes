plot(points, width = 5, color = "black") {
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = width
    const x = Object.keys(points).map(a => parseFloat(a))
    const y = Object.values(points).map(a => parseFloat(a))
    this.ctx.beginPath();
    this.ctx.moveTo(this.mainVector[0] + x[0] * this.scale, this.mainVector[1] - y[0] * this.scale)
    for (let i in x) {
        const a = this.mainVector[0] + x[i] * this.scale;
        const b = this.mainVector[1] - y[i] * this.scale;
        this.ctx.lineTo(a, b)
        this.ctx.moveTo(a, b)
    }
    this.ctx.stroke()
}
