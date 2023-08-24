const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
// import imagemin from 'gulp-imagemin';
const imagemin = require('gulp-imagemin');


function sassCompiler(){
    return gulp.src('./styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./styles'));
}

// function javascriptProcessor(){
//     return gulp.src('./source/scripts/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('./build/scripts'));
// }

function imageCompressor(){
    return gulp.src('./fontimages/images-build/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./images'));
}



exports.default = () => {
    gulp.watch(
        './source/styles/*.scss', 
        {ignoreInitial: false}, 
        gulp.series(sassCompiler)
    )

    // gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(javascriptProcessor))

    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(imageCompressor))
}