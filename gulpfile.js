'use strict';

const gulp = require('gulp');

const npm = {
    uglify: require('gulp-uglify'),
    sourcemaps: require('gulp-sourcemaps'),
    eslint: require('gulp-eslint'),
    rename: require('gulp-rename'),
    header: require('gulp-header'),
    gzip: require('gulp-gzip')
};

const version = require('./package.json').version;
const year = 2018;

const copyright = name =>
    `/**
 * ExLib/${name} v${version}
 * Copyright ${year} Vitaly Tomilov
 * Released under the MIT License
 * https://github.com/vitaly-t/exlib
 */
`;

gulp.task('lint', () => {
    return gulp.src('./src/*.js', './gulpfile.js')
        .pipe(npm.eslint())
        .pipe(npm.eslint.format())
        .pipe(npm.eslint.failAfterError());
});

function zipTask(name) {
    gulp.task('zip-' + name, () => {
        return gulp.src('./dist/' + name + '/' + name + '.min.js')
            .pipe(npm.gzip({extension: 'gzip'}))
            .pipe(gulp.dest('./dist/' + name));
    });
}

function moduleTask(name) {
    gulp.task('mod-' + name, () => {
        return gulp.src('./src/' + name + '.js')
            .pipe(npm.sourcemaps.init())
            .pipe(npm.uglify())
            .pipe(npm.header(copyright(name)))
            .pipe(npm.rename(name + '.min.js'))
            .pipe(npm.sourcemaps.write('.'))
            .pipe(gulp.dest('./dist/' + name));
    });
}

function fullTask(name) {
    moduleTask(name);
    zipTask(name);
    gulp.task(name, gulp.series(['mod-' + name, 'zip-' + name]));
}

fullTask('remedy');
fullTask('dialog');

gulp.task('build', gulp.parallel(['lint', 'remedy', 'dialog']));
gulp.task('default', gulp.series(['build']));
