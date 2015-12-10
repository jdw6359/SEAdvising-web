var gulp = require('gulp');

module.exports = function () {
    return gulp.src([
            'app/**/*.{png,jpg,gif,svg}',
            'img/**.*'
        ])
        .pipe(gulp.dest('dist/img'));
};
