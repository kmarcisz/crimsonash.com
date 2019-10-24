var gulp        = require('gulp');

var browserSync = require('browser-sync').create();
var cleanCSS    = require('gulp-clean-css');
var uglify      = require('gulp-uglify');
var plumber     = require('gulp-plumber');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');

var paths = {
    scripts: [
        'node_modules/animated-scroll-to/animated-scroll-to.js',
        'assets/scripts/*.js',  
        'assets/scripts/main.js',
    ],
    styles: [
        'assets/styles/main.sass', 
        'assets/styles/*.sass',
    ],
};

gulp.task('scripts', function(done) {
    gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/js/'));
    done();
});

gulp.task('styles', function (done) {
    gulp.src('assets/styles/main.sass')
        .pipe(plumber())
        .pipe(sass({
            includePaths: ['public/stylesheets/sass/']
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css/'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('watch', function(done) {
    browserSync.init({
        files: ["*.haml", "*.ruby", "*.css", "*.sass", "*.js"],
        proxy: "http://192.168.1.99:9393"
    })

    gulp.watch(paths.scripts, gulp.series('scripts'));
    gulp.watch(paths.styles, gulp.series('styles'));
    done();
});

gulp.task('build', gulp.series('scripts', 'styles'));
gulp.task('default', gulp.series('build', 'watch'));
