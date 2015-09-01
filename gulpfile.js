var gulp = require('gulp');
var sketch = require('gulp-sketch');
var imagemin = require('gulp-imagemin');

gulp.task('sketch', function(){
  return gulp.src('./src/sketch/*.sketch')
    .pipe(sketch({
      export: 'slices',
      formats: 'svg'
    }))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest('./dist/svg/'));
});
