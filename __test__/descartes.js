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