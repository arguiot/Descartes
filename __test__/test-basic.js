const d = require("../dist/descartes")

d.init(1000, 1000, "png")

d.grid(10)
d.drawAxis()

d.scale = 10 // zoom 10x
d.points({
	1: 2,
	3: 4
})
d.plot(d.format([1, 2, 3, 4], [1, 4, 9, 16]), 2)
d.savefig("test.png")
