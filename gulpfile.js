var assign = require('object-assign');
var del = require('del');
var gulp = require('gulp');
var file = require('gulp-file');
var react = require('gulp-react');
var list = require('gulp-require-list');

var pkg = require('./package.json');

var paths = {
  src: 'src/**/*.js',
  docs: ['README.md', 'LICENSE'],
  dist: 'dist/'
};

gulp.task('build', ['build:scripts', 'build:package', 'build:docs']);

gulp.task('clean:dist', function (cb) {
  del(paths.dist, cb);
});

gulp.task('build:scripts', ['clean:dist'], function () {
  return gulp.src(paths.src, {base: 'src'})
    .pipe(react({harmony: true, stripTypes: true}))
    .pipe(list({
      '.': 'index'
    }))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build:package', ['clean:dist'], function () {
//  var p = 
  var p = assign({}, pkg);
  p.devDependencies = undefined;
  p.scripts = undefined;
  p.jest = undefined;

  return file('package.json', JSON.stringify(p, null, 2), {src:true})
    .pipe(gulp.dest(paths.dist));
});


gulp.task('build:docs', ['clean:dist'], function () {
  return gulp.src(paths.docs)
    .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function() {
  return gulp.watch(paths.src, ['build']);
});
