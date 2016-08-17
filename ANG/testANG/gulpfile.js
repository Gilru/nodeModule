var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
    // Single entry point to browserify
    gulp.src('arraySome.js')
        .pipe(browserify())
        .pipe(gulp.dest('./bin'))
});

gulp.task("watch",function () {
    gulp.watch(["./*.js"],["browserify"])
})