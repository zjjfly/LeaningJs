const gulp = require('gulp');
const path = require('path');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const del = require('del');

gulp.task('eslint', function () {
    return gulp.src(['es6/**/*.js', 'public/es6/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
gulp.task('autoCompile', function () {
    gulp.watch('es6/**/*.js', function (event) {
        console.log('File ' + event.path + ' was ' + event.type +'.');
        if ('changed' === event.type || 'added' === event.type) {
            compile(event.path);
        }
        if ('deleted' === event.type) {
            var filePathFromSrc = path.relative(path.resolve('es6'), event.path);
            var destFilePath = path.resolve('dist', filePathFromSrc);
            del.sync(destFilePath);
        }
    });
});

function compile(file) {
    var filePathFromSrc = path.relative(path.resolve('es6'), file);
    var destFilePath = path.dirname(path.resolve('dist', filePathFromSrc));
    console.log(destFilePath);
    gulp.src(file).pipe(plumber(function (error) {
        console.log('compile error:\n' + error);
    }))
        .pipe(babel())
        .pipe(gulp.dest(destFilePath));
}