var gulp      = require('gulp');

var browserSync = require('browser-sync').create();
var minifycss   = require('gulp-minify-css');
var uglify      = require('gulp-uglify');
var plumber     = require('gulp-plumber');
var sass        = require('gulp-sass');

var paths = {
    scripts: ['assets/scripts/*.js', 'assets/scripts/main.js'],
    styles: ['assets/styles/main.sass', 'assets/styles/*.sass']
};

gulp.task('scripts', function() {
    gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'));
});

gulp.task('styles', function () {
    gulp.src('assets/styles/main.sass')
        .pipe(plumber())
        .pipe(sass({
            includePaths: ['public/stylesheets/sass/']
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('public/css/'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    browserSync.init({
        files: ["*.haml", "*.ruby", "*.css", "*.sass", "*.js"],
        proxy: "http://192.168.1.99:9393"
    })

    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);