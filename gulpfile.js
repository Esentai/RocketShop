var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    browserSync = require("browser-sync"),
    concat = require('gulp-concat'),
    rigger = require('gulp-file-include'),
    notify = require("gulp-notify"),
    image = require('gulp-image');
    reload = browserSync.reload;



var path = {
    build: {
        html: 'build/',
        js: 'build/assets/js/',
        css: 'build/assets/css/',
        img: 'build/assets/img/' ,
        fonts: 'build/assets/fonts/',
        media: 'build/assets/media'
    },
    src: {
        html: 'dev/*.html',
        js: 'dev/assets/js/main.js',
        style: 'dev/assets/sass/main.scss',
        img: 'dev/assets/img/**/*.*',
        fonts: 'dev/assets/fonts/**/*.*',
        media: 'dev/assets/media/**/*.*'
    },
    watch: {
        html: 'dev/**/*.html',
        js: 'dev/**/*.js',
        style: 'dev/**/*.scss',
        img: 'dev/assets/img/**/*.*',
        fonts: 'dev/assets/fonts/**/*.*',
        media: 'dev/assets/media/**/*.*'

    },
    clean: './build'
};


var config = {
    server: {
        baseDir: "./build"
    },
    host: 'localhost',
    port: 9000,

};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});



gulp.task('js:build', function() {
    gulp.src([
        'dev/assets/js/main.js',
        'dev/blocks/page/**/*.js',
        'dev/blocks/common/**/*.js'

    ])
        .pipe(gulp.dest(path.build.js))
});


gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
        .pipe(prefixer(
            {
                browsers: ['last 10 versions'],
                cascade: false
            }
        ))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});


gulp.task('media:build', function() {
    gulp.src(path.src.media)
        .pipe(gulp.dest(path.build.media))
});


gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build',
    'media:build'
]);


gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);