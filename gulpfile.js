const gulp = require('gulp');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');

gulp.task('default', ['sass', 'html', 'watch']);
gulp.task('dev', ['sass', 'html']);

gulp.task("html", (done)=>{
  gulp.src('./src/html/**/*.html')
  .pipe(gulp.dest('./public/'))
  .on("end", done)
})

gulp.task('sass', function(done){
  gulp.src('./src/scss/style.scss')
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(prefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(clean())
  .pipe(gulp.dest('./public/styles'))
  .on('end', done)
});

gulp.task('watch', function(){
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/html/**/*.html', ['html']);
})
