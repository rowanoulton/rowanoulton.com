var gulp = require('gulp')
var sass = require('gulp-sass')
var config = require('./config').sass
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.settings))
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest))
})
