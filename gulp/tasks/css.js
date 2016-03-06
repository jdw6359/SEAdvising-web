var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

module.exports = function () {
    return gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/font-awesome/css/font-awesome.css',
            './node_modules/textangular/dist/textAngular.css',
            './node_modules/angular-loading-bar/build/loading-bar.css',
            './node_modules/angularjs-color-picker/dist/angularjs-color-picker.min.css',
            './node_modules/angularjs-color-picker/dist/themes/angularjs-color-picker-bootstrap.min.css',
            './styles/site.css'
        ])
        .pipe(minify())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist/css'));
};
