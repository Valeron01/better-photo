const source_folder = 'src'
const project_folder = 'src'

const path = {
    build: {
        html: '../' + project_folder + '/',
        img: '../' + project_folder + '/img/',
        css: '../' + project_folder + '/css/',
        js: '../' + project_folder + '/js/',
        fonts: '../' + project_folder + '/fonts/'
    },
    src: {
        html: [source_folder + '/*.html', '!'+ source_folder + '/_*.html'],
        img: source_folder + '/img/**/*.+(png|jpg|gif|webp|svg|ico)',
        scss: source_folder + '/scss/**/*.scss',
        js: source_folder + '/js/**/*.js',
        fonts: source_folder + '/fonts/*.ttf'
    },
    watch: {
        html: source_folder + '/**/*.html',
        img: source_folder + '/img/**/*.+(png|jpg|gif|webp|svg|ico)',
        scss: source_folder + '/scss/**/*.scss',
        js: source_folder + '/js/**/*.js',
    } 
}

const { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass')(require('sass')),
    prefixer = require('gulp-autoprefixer'),
    reset_scss = require('node-reset-scss'),
    file_includer = require('gulp-file-include')

function html() {
    return src(path.src.html)
        .pipe(file_includer())
        .pipe(dest(path.build.html))
        .pipe(browserSync.stream())
}

function scss() {
    return src(path.src.scss)
        .pipe(sass({
                includePaths: reset_scss.includePath
            }).on('error', sass.logError))
        .pipe(prefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: true,
            grid: true
        }))
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream())
        
}

function img() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
}

function server() {
    browserSync.init({
        server: {
            baseDir: '../' + project_folder + '/',
            index: 'index.html',
        },
        port: 8080,
        notify: false
    })
}

function watchFiles() {
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.scss], scss).on('change', browserSync.reload)
    gulp.watch([path.watch.img], img)
}

let change = gulp.series(scss, html, img)
let watch = gulp.parallel(change, watchFiles, server)

exports.html = html
exports.scss = scss
exports.watch = watch
exports.default = watch
