savefig(path) {
    const ext = require('path').extname(path).split(".")[1]
    if (this.ext != ext) {
        throw "Extension names doesn't match."
    }
    const buf = this.canvas.toBuffer();
    fs.writeFileSync(path, buf);
}
