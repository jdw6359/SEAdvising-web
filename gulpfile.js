var gulp = require('./gulp')([
    'browserify',
    'css',
    'fonts',
    'html',
    'images',
    'lint',
    'serve',
    'watch'
]);

gulp.task('build', ['browserify', 'html', 'css', 'images', 'fonts']);
gulp.task('default', ['build', 'serve', 'watch']);
