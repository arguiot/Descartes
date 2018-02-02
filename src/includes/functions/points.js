points(points, size=5, color = "black") {
    this.ctx.fillStyle = color;
    const x = Object.keys(points).map(a => parseFloat(a))
    const y = Object.values(points).map(a => parseFloat(a))
    for (let i in x) {
		const a = this.mainVector[0] + x[i] * this.scale;
		const b = this.mainVector[1] - y[i] * this.scale;
        this.ctx.beginPath();
        this.ctx.arc(a, b, size, 0, 2 * Math.PI, true);
        this.ctx.fill();
    }
}
