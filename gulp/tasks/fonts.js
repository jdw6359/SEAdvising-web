var gulp = require('gulp');

module.exports = function () {
	return gulp.src([
            './node_modules/font-awesome/fonts/*.{svg,otf,eot,ttf,woff,woff2}',
            './node_modules/bootstrap/dist/fonts/*.{svg,otf,eot,ttf,woff,woff2}'
        ])
        .pipe(gulp.dest('dist/fonts'));
};
