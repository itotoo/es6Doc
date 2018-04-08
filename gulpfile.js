// 配置
const config = require('./config');
const gulp = require('gulp');
const watch = require('gulp-watch');
const fileinclude = require('gulp-file-include');
// const babel = require('gulp-babel'); // #使用了webpack就不能使用gulp处理（不能引入）
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const htmlmin = require('gulp-htmlmin'); // html 压缩
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync'); // 浏览器 预览
const notify = require('gulp-notify'); // 处理报错而不终止
const pump = require('pump');
const changed = require('gulp-changed');
const del = require('del');
// ecmajs编译
const webpackStream = require('webpack-stream');

// 开发环境
let env = gulp.env._[0];


// 默认开发
gulp.task('default',['browser-sync']);
// 执行打包发布任务
gulp.task('pro', ['browser-sync']);

// 清除
gulp.task('del',function (cb) {
    del([ config.clean.src ],{force: true}, cb);
});

// _html_
gulp.task('_html_', function() {
    gulp.src(config.html.src)
        .pipe(changed(config.html.dest))
        // 合并模板 
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlmin({collapseWhitespace: env === 'pro'?true : false}))
        // 不做处理输出
        .pipe(gulp.dest(config.html.dest))
});
// _sass_
gulp.task('_sass_',function(){
    return gulp.src(config.sass.src)
        .pipe(changed(config.sass.dest))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe( sass().on('error', notify.onError(function (error) {
            return "Message to the notifier: " + error.message;
        }) ))
        .pipe(cleanCSS({
            compatibility: 'ie8',
            format: 'keep-breaks' ,
            rebase :false
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(config.sass.dest))
});
// _ecmajs_
gulp.task('_ecmajs_',function(cb){
    if(env === 'pro'){
        return gulp.src(config.ecmajs.src).pipe(
            // 打包处理
            webpackStream(require('./webpack.config.Pro.js'))
        ).pipe(
            gulp.dest(config.ecmajs.dest)
        )
    }else{
        return gulp.src(config.ecmajs.src).pipe(
            // 打包处理
            webpackStream(require('./webpack.config.Dev.js'))
        ).pipe(
            gulp.dest(config.ecmajs.dest)
        )
    }
});
// 直接输出
gulp.task('images', function() {
    return gulp.src(config.images.src)
        .pipe(changed(config.images.dest))
        .pipe(imagemin())
        .pipe(gulp.dest(config.images.dest))
});
// 直接输出
gulp.task('plugin', function() {
    return gulp.src(config.plugin.src)
        .pipe(gulp.dest(config.plugin.dest))
});
// 直接输出
gulp.task('common', function() {
    return gulp.src(config.common.src)
        .pipe(gulp.dest(config.common.dest))
});
// 直接输出
gulp.task('data', function() {
    return gulp.src(config.data.src)
        .pipe(gulp.dest(config.data.dest))
});

// watch
gulp.task('watch',function(){
    gulp.watch(config.html.src, ['_html_']).on("change", browserSync.reload);
    gulp.watch(config.sass.src, ['_sass_']).on("change", browserSync.reload);
    gulp.watch(config.ecmajs.src, ['_ecmajs_']).on("change", browserSync.reload);
});

// browser-sync
gulp.task('browser-sync',['_html_','_sass_','_ecmajs_','images','plugin','common','data','watch'],function(){
    browserSync.init({
        server: {
            baseDir: "./",
            index: '/'
        },
        open:false,
        port: 9999
    });
})