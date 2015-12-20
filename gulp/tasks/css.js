var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

module.exports = function () {
    return gulp.src([
            './node_modules/materialize-css/dist/css/materialize.css',
            './node_modules/font-awesome/css/font-awesome.css',
            './node_modules/textangular/dist/textAngular.css',
            './node_modules/angular-loading-bar/build/loading-bar.css',
            './styles/site.css'
        ])
        .pipe(minify())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist/css'));
};
