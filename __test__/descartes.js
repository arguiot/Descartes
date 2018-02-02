/*
**   © Arthur Guiot 2017
**         TheoremJS
*/

const canvas = require("canvas");
const fs = require("fs");
class Descartes {
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
	grid(n=1, color="grey") {
		this.ctx.fillStyle = color
		for (var i = 0; i < this.width; i += n * this.scale) {
			this.ctx.fillRect(i, 0, 1, this.height)
		}
		for (var i = 0; i < this.height; i += n * this.scale) {
			this.ctx.fillRect(0, i, this.width, 1)
		}
	}
	init(width = 200, height = 200, ext = "png") {
	    this.width = width;
	    this.height = height
	    this.ext = ext
	    this.canvas = new canvas(width, height, ext)
	    this.ctx = this.canvas.getContext("2d")
	    this.mainVector = [0, this.height]
		this.scale = 2;
	    this.ctx.fillStyle = "black";
	    this.ctx.fillRect(0, 0, canvas.width, canvas.height);
		this.ctx.save()
	}
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
	savefig(path) {
	    const ext = require('path').extname(path).split(".")[1]
	    if (this.ext != ext) {
	        throw "Extension names doesn't match."
	    }
	    const buf = this.canvas.toBuffer();
	    fs.writeFileSync(path, buf);
	}
	get fn() {
		return this.prototype;
	}
}
// Browserify / Node.js
if (typeof define === "function" && define.amd) {
  define(() => new Descartes());
  // CommonJS and Node.js module support.
} else if (typeof exports !== "undefined") {
  // Support Node.js specific `module.exports` (which can be a function)
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = new Descartes();
  }
  // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
  exports.Descartes = new Descartes();
} else if (typeof global !== "undefined") {
  global.Descartes = new Descartes();
}