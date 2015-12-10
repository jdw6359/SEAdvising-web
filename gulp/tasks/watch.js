var gulp = require('gulp');

module.exports = function () {
    gulp.watch(['index.html', 'app/**/*.html'], ['html']);
    gulp.watch(['styles/*.css', 'app/**/*.css'], ['css']);
    gulp.watch(['app/**/*.js'], ['browserify']);
    gulp.watch(['img/**/*.{svg,png,jpg,gif}'], ['images']);
};
