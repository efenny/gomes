var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
    babel = require('gulp-babel');
    postcss = require('gulp-postcss');
    autoprefixer = require('autoprefixer');
    flexibility = require('postcss-flexibility')

var scssSource = ['src/styles/main.scss'],
    scssWatch = ['src/styles/**/*.scss'],
    javascriptSource = ['src/js/**/*.js'],
    javascriptWatch = ['src/js/**/*.js'];


gulp.task('sass', function() {
    return gulp.src(scssSource)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(postcss([ autoprefixer({ 
            cascade: false
        }) ]))
        .pipe(postcss([ flexibility ]))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function() {
    return gulp.src(javascriptSource)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

gulp.task('watch', function(done) {
    gulp.watch(scssWatch, gulp.parallel('sass'));
    gulp.watch(javascriptWatch, gulp.parallel('js'));
    done();
});

gulp.task('default', gulp.series('sass', 'js', 'watch'));