var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

var scssSource = ['src/styles/main.scss'],
    scssWatch = ['src/styles/**/*.scss'],
    javascriptSource = ['src/js/**/*.js'],
    javascriptWatch = ['src/js/**/*.js'];



gulp.task('sass', function() {
    return gulp.src(scssSource)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function() {
    return gulp.src(javascriptSource)
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function(done) {
    gulp.watch(scssWatch, gulp.parallel('sass'));
    gulp.watch(javascriptWatch, gulp.parallel('js'));
    done();
});

gulp.task('default', gulp.series('sass', 'js', 'watch'));