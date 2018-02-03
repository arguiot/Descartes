const d = require(__testDir + "../dist/descartes")

const t = require(__testDir + "../node_modules/theorem.js/dist/theorem")
const md5 = require(__testDir + "../node_modules/md5-file/index")
eye.describe("MMOC - Rendering", () => {
	eye.test("PNG: 2000x2000", "node",
	    $ => $(function() {
	        d.init(2000, 2000, "png")

	        d.scale = 800 // zoom

	        d.center() // will put O in the midle of the image

	        function genMMOC(l, n = 10) {
	            const g = t.drawCircularPoints(n)

	            const gX = Object.keys(g).map(x => parseFloat(x))
	            const gY = Object.values(g).map(x => parseFloat(x))
	            d.points(g, 5, "white")

	            for (var i = 0; i < n; i++) {
	                let p = {}
	                p[gX[i]] = gY[i]
	                const r = Math.floor((i * l) % n)
	                p[gX[r]] = gY[r]
	                d.plot(p, 2, "white")
	            }

	        }
	        genMMOC(6, 500)
	        d.savefig(__testDir + "out/mmoc.png")
	    }).toRun()
	)
	eye.test("JPG: 2000x2000", "node",
	    $ => $(function() {
	        d.init(2000, 2000, "jpg")

	        d.scale = 800 // zoom

	        d.center() // will put O in the midle of the image

	        function genMMOC(l, n = 10) {
	            const g = t.drawCircularPoints(n)

	            const gX = Object.keys(g).map(x => parseFloat(x))
	            const gY = Object.values(g).map(x => parseFloat(x))
	            d.points(g, 5, "white")

	            for (var i = 0; i < n; i++) {
	                let p = {}
	                p[gX[i]] = gY[i]
	                const r = Math.floor((i * l) % n)
	                p[gX[r]] = gY[r]
	                d.plot(p, 2, "white")
	            }

	        }
	        genMMOC(6, 500)
	        d.savefig(__testDir + "out/mmoc.jpg")
	    }).toRun()
	)
})
eye.test("File verification", "node",
	$ => $(md5.sync(__testDir + "out/mmoc.png")).Equal("55fabbacce7810db3c35e68b4a74da7d"),
	$ => $(md5.sync(__testDir + "out/mmoc.jpg")).Equal("55fabbacce7810db3c35e68b4a74da7d")
)
