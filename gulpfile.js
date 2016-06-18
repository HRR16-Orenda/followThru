var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-spawn-mocha');
var wait = require('gulp-wait');

gulp.task('server-test', function(done) {
  return gulp.src('./test/server/ServerSpec.js', {read: false})
  // wait till nodemon get restarted
  .pipe(wait(1500))
  .pipe(mocha({reporter: 'spec'}));
});

// the real stuff
gulp.task('default', ['nodemon'], function () {
  gulp.watch('./server/**/*.js', {debounceDelay: 1000}, ['server-test']);
  gulp.watch('./test/server/**/*.js', {debounceDelay: 1000}, ['server-test']);
});

// our gulp-nodemon task
gulp.task('nodemon', function (cb) {
  var started = false;
  return nodemon({
    script: './index',
    ext: 'js'
  }).on('start', function () {
    //avoid nodemon being started multiple times
    if (!started) {
      cb();
      started = true;
    }
  })
  .on('crash', function() {
    console.log('nodemon.crash');
  })
  .on('restart', function() {
    console.log('nodemon.restart');
  })
  .once('quit', function () {
    // handle ctrl+c without a big weep
    process.exit();
  });
});
