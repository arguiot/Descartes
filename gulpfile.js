const gulp = require("gulp");
const rigger = require("gulp-rigger");
const rename = require("gulp-rename");
const babili = require("gulp-babili");
gulp.task("copy", () => {
    gulp
        .src("src/*.js")
        .pipe(rigger())
        .pipe(rename({
            basename: "descartes"
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["copy"])
