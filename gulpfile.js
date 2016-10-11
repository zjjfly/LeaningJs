const gulp = require("gulp");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");
gulp.task("babel", function () {
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
    return gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});
gulp.task("eslint",["babel"], function () {
    return gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
