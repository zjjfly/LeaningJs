//@ts-check
const gulp = require('gulp');
const Path = require('path');
const fs = require('fs');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const del = require('del');

gulp.task('eslint', function () {
    return gulp.src(['es6/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
gulp.task('autoCompile', function () {
    //first,compile all file existed
    gulp.src(['es6/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('dist'));
    gulp.watch('es6/**', function (event) {
        const ext = Path.extname(event.path);
        const filePathFromSrc = Path.relative(Path.resolve('es6'), event.path);
        const destFilePath = Path.resolve('dist', filePathFromSrc);
        if ('deleted' !== event.type) {
            if (ext === '.js') {
                compile(event.path, filePathFromSrc, destFilePath);
            } else if (ext === '' && event.type === 'added') {
                fs.mkdir(destFilePath, err => {
                    if (err) {
                        console.error(err);
                    }
                });
            }
        } else {
            del.sync(destFilePath);
        }
    });
});

function compile(file, srcPath, destPath) {
    console.log(`compile ${Path.basename(file)} ,compiled file:dist/${srcPath}`);
    gulp.src(file).pipe(plumber(function (error) {
        console.log('compile error:\n' + error);
    }))
        .pipe(babel())
        .pipe(gulp.dest(Path.dirname((destPath))));
}