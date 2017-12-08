let gulp = require('gulp');
let uglify = require('gulp-uglify-es').default;
let concat = require('gulp-concat');
let cssMin = require('gulp-css');
let rename = require('gulp-rename');


gulp.task('css',function () {
    gulp.src('app/css/style.css')
        .pipe(concat('app.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('app'));
});

gulp.task('scripts', function () {
    return gulp.src([
        'app/js/Sprite.js',
        'app/js/Player.js',
        'app/js/script.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/'));
});

gulp.task("uglify", function () {
    return gulp.src("app/app.js")
        .pipe(rename("app.min.js"))
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("app/"));
});

gulp.task('default', ['scripts','uglify']);