const { watch, src, dest } = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

function scss() {
    return src('./gridcore.scss')
        .pipe(sass({
            outputStyle: 'compressed',
        }))
        .pipe(autoprefixer())
        .pipe(dest('./dist/'));
}

exports.default = function() {
  watch('./**/*.scss', scss);
};