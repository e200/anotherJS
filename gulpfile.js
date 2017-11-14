const
    // Requires gulp
    gulp = require('gulp')

    // Requires browser-sync
    browserSync = require('browser-sync')

    //Requires gulp-uglify
    uglify = require('gulp-uglify')

    // Requires pumbler
    pumbler = require('gulp-plumber')

const
    projectFolder = './'
    srcFolder = projectFolder + 'src/'
    distFolder = projectFolder + 'dist/'

gulp.task('js:minify', function(){
    const uglifyOptions = {
        compress: {
            drop_debugger: true,
            toplevel: true
        },
        mangle: true
    }

    return gulp.src([srcFolder + 'another.js'])
        .pipe(pumbler())
        .pipe(uglify(uglifyOptions))
        .pipe(gulp.dest(distFolder))
})

gulp.task('js:watch', function(){
    browserSync.init({
        server: './'
    })

    gulp.watch(['./src/**', './tests/**'])
        .on('change', browserSync.reload)
})

gulp.task('default', ['js:watch'])
