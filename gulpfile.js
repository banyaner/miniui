var gulp = require('gulp'),
    replace = require('gulp-replace'),
    exec = require('child_process').exec,
    fs = require('fs'),
    easeftp = require('easeftp'),
    upload = require('easeftp/upload').add,
    ftppass = JSON.parse(fs.readFileSync('.ftppass', 'utf-8')),
    pkg = require('./package.json'),
    plumber = require('gulp-plumber'),
    gulpTinyPng = require('gulp-tinypng-extended')
gulp.task('tinypng-dist', function () {
    gulp.src('dist/**/*.{png,jpg,jpeg}')
        .pipe(plumber())
        .pipe(gulpTinyPng({
            key: ftppass.tinypng.key,
            sigFile: '.tinypng-sigs',
            sameDest: true,
            summarise: true,
            log: true
        }))
        .pipe(gulp.dest('dist'))
})
gulp.task('test', function () {
    exec(`cp -rf dist ${pkg.name}`, function () {
        exec(`scp -r ${pkg.name} ${ftppass.test.username}@${ftppass.test.host}:/home/appops/app/activity`, function (e) {
            e && console.log(e)
            exec(`rm -rf ${pkg.name}`)
        })
    })
})
gulp.task('pre', function () {
    exec(`cp -rf dist ${pkg.name}`, function () {
        exec(`scp -r ${pkg.name} ${ftppass.pre.username}@${ftppass.pre.host}:/home/appops/htmlfile/activity`, function (e) {
            e && console.log(e)
            exec(`rm -rf ${pkg.name}`)
        })
    })
})
// 上传的html地址为`http://wp.m.163.com/163/html/${pkg.name}/index.html`
gulp.task('publish', function () {
    if (!pkg.projectId) {
        throw new Error('package.json中未添加统计的projectId')
    }
    const statistics = [
        `<script>window.projectId ="${pkg.projectId}"; (function(w,d,s,n) {var f=d.getElementsByTagName(s)[0],k=d.createElement(s);k.async=true;k.src="//static.ws.126.net/163/frontend/antnest/"+n+".js";f.parentNode.insertBefore(k,f);})(window,document,"script","${pkg.projectId}");</script>`
    ].join('')
    gulp.src(['dist/index.html'])
        .pipe(replace('</head>', statistics))
        .pipe(gulp.dest('dist/'))
    upload('index.html', {
        username: ftppass.easeftp.username,
        password: ftppass.easeftp.password,
        path: 'html/' + pkg.name,
        debug: true,
        cwd: './dist',        //指定匹配的根目录
    }).then(({urls}) => {
        console.log(urls)
    })
    upload(['**/**'], {
        username: ftppass.easeftp.username,
        password: ftppass.easeftp.password,
        path: 'activity/' + pkg.name,    //cdn线上路径
        debug: true,
        cwd: './dist',        //指定匹配的根目录
        exclude: ['index.html', '*.map']
    }).then(({urls}) => {
        // console.log(urls)
    })
})
gulp.task('tinypng-examples-static', function () {
    gulp.src('examples/**/*.{png,jpg,jpeg}')
        .pipe(plumber())
        .pipe(gulpTinyPng({
            key: ftppass.tinypng.key,
            sigFile: '.tinypng-sigs',
            sameDest: true,
            summarise: true,
            log: true
        }))
        .pipe(gulp.dest('src'))
    gulp.src('static/**/*.{png,jpg,jpeg}')
        .pipe(plumber())
        .pipe(gulpTinyPng({
            key: ftppass.tinypng.key,
            sigFile: '.tinypng-sigs',
            sameDest: true,
            summarise: true,
            log: true
        }))
        .pipe(gulp.dest('static'))
})