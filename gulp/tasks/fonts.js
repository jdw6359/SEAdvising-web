var gulp = require('gulp');

module.exports = function () {

    gulp.src([
    	'./node_modules/font-awesome/fonts/*.{svg,otf,eot,ttf,woff,woff2}'
    ]).pipe(gulp.dest('dist/fonts'));

    gulp.src([
    	'./node_modules/materialize-css/dist/font/material-design-icons/*.{svg,otf,eot,woff,woff2}'
    ]).pipe(gulp.dest('dist/font/material-design-icons'));

    gulp.src([
    	'./node_modules/materialize-css/dist/font/roboto/*.{svg,otf,eot,ttf,woff,woff2}'
    ]).pipe(gulp.dest('dist/font/roboto'));
};
