let gulp = require('gulp')
let sass = require('gulp-sass')
let rename = require('gulp-rename')
let babel = require('babelify')
let browserify =require('browserify')
let source = require('vinyl-source-stream')
let watchify = require('watchify')

gulp.task('styles', ()=>{
  gulp
    .src('src/index.scss')
    .pipe(sass())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('public/css'))
})
gulp.task('assets', ()=>{
  gulp
    .src('src/assets/*')
    .pipe(gulp.dest('public/img'))
})

function complile(wacth) {
  let bundle = watchify(browserify('./src/index.js'))

  function rebundle() {
    bundle
      .transform(babel, {presets: ["es2015"]})
      .bundle()
      .on('error', function (err) { console.log(err); this.emit('end') })
      .pipe(source('index.js'))
      .pipe(rename('main.js'))
      .pipe(gulp.dest('public/js'))
  }

  if (wacth) {
    bundle.on('update',()=>{
      console.log('------> Bundling...')
      rebundle()
    })
  }
  rebundle()
}

gulp.task('build', ()=> complile())

gulp.task('watch', ()=> complile(true))

gulp.task('default', ['styles', 'assets' , 'build'])
