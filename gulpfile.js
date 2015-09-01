var gulp = require('gulp');
var sketch = require('gulp-sketch');
var svgo = require('imagemin-svgo');

gulp.task('sketch', function(){
  return gulp.src('./src/sketch/*.sketch')
    .pipe(sketch({
      export: 'slices',
      formats: 'svg'
    }))
    .pipe(svgo({plugins: [
      {removeViewBox: false},
      {removeDimensions: true},
      {removeTitle: true}
    ]})())
    .pipe(gulp.dest('./dist/svg/'));
});
