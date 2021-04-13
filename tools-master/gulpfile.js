var gulp = require('gulp');
var plumber = require('gulp-plumber');
var nunjucks = require('gulp-nunjucks-render');
var plumberNotifier = require('gulp-plumber-notifier')
var beautify = require('gulp-beautify');
require('dotenv').config();


var sub_folder = process.env.SUBF ? process.env.SUBF + '/' : '';


gulp.task('html-render', function () {
    return gulp.src(['./src/' + sub_folder + 'views/pages/*.html',
    './src/' + sub_folder + 'views/pages/**/*.html'])
        .pipe(plumberNotifier())
        .pipe(
            nunjucks({
                path: './src/' + sub_folder + 'views/',
                ext: '.html',
                data: {
                    css: (data) => {
                        return './assets/css/' + data
                    },
                    js: (data) => {
                        return './assets/js/' + data
                    },
                    img: (data) => {
                        return './assets/images/' + data
                    },
                    comp: (data) => {
                        return 'components/' + data + '.html'
                    },
                    layout: (data) => {
                        return 'layouts/' + data + '.html'
                    },
                    block: (data) => {
                        return 'blocks/' + data + '.html'
                    },
                    section: (data) => {
                        return 'sections/' + data + '.html'
                    }
                }
            })
        )
        .pipe(beautify.html())
        .pipe(plumber.stop())
        .pipe(gulp.dest('public/' + sub_folder));
});

gulp.task('html', () => {
    gulp.watch([
        `./src/${sub_folder}views/pages/*.html`,
        `./src/${sub_folder}views/**/*.html`,

    ], gulp.series('html-render'));
});