//gulp
const gulp = require('gulp');

// styles
const sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');

// scripts
const uglify = require('gulp-uglify');
var babel = require('gulp-babel');

// utilities
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const del = require("del");

//Tasks
gulp.task('all:clean', function () {
    return del(['public/**/*.js', 'public/**/*.css'])
});

//Styles
gulp.task('css:clean', function () {
    return del('public/**/*.css');
});

gulp.task('sass:compile', function (done) {

    return gulp.src('client/styles/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(rename('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/styles'));
});

gulp.task('sass', gulp.series('css:clean', 'sass:compile'));

//Scripts
gulp.task('js:clean', function () {
    return del('public/**/*.js');
});

gulp.task('js:build', function () {
    return gulp.src(['client/js/plugins/*.js', 'client/js/main.js', 'client/js/components/**/*.js'])
        // .pipe(babel({
        //     presets: ['@babel/preset-env'],
        // }))
        .pipe(concat('public.js'))
        // .pipe(uglify({ compress: { hoist_funs: false, hoist_vars: false } }))
        .pipe(rename('main.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('js', gulp.series('js:clean', 'js:build'));

//Watch
gulp.task('watch', function () {
    gulp.watch(['client/styles/**/*.scss', 'client/styles/imports/**/*.scss'], gulp.series('sass'));
    gulp.watch(['client/js/**/*.js'], gulp.series('js'));
});

//Default
gulp.task('default',
    gulp.series(gulp.parallel('sass', 'js')));
