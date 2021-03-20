module.exports = () =>
$.gulp.task('html', ()=>
$.gulp.src($.path.src.html)
  // .pipe(pug.compileFile())
  .pipe($.gulp.dest($.path.build.html)))