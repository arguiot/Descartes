const d = require("../dist/descartes")
const t = require("theorem.js")
d.init(1000, 1000, "png")

d.scale = 100 // zoom 100x
d.grid()
d.drawAxis()

d.points({
	1: 2,
	3: 4
})
const f = t.f("x", "(x) ** 3")
d.plotF(f)
d.savefig("test.png")
