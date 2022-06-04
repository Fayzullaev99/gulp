module.exports = ()=>{
    $.gulp.task('html', ()=>{
        $.gulp.src($.path.src.html)
          .pipe($.gulp.dest($.path.build.html))
    })
}