var gulp = require('gulp');

module.exports = function () {
    return gulp.src([
            './index.html',
            './app/**/*.html'
        ], {base: '.'})
        .pipe(gulp.dest('dist'));
};
