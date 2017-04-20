var gulp = require('gulp');
var nodemon = require('gulp-nodemon')		//本地服务
//node本地服务
gulp.task('run',function(){
	nodemon({
		script:'index.js',
	})
})

gulp.task('img',function(){
	return gulp.src('css/test.css')
		   .pipe(img({
			   "spriteSheet":'image/index.png',
			   "pathToSpriteSheetFromCSS":'image/index.png'
		   }))
		   .pipe(gulp.dest('css/test2.css'))
})