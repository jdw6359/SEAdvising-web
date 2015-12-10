var gulp = require('gulp');
var jshint = require('gulp-jshint');

module.exports = function () {
    gulp.task('lint', function () {
        return gulp.src('app/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
};
