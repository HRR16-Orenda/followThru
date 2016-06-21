var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var wait = require('gulp-wait');
var istanbul = require('gulp-istanbul');
var plumber = require('gulp-plumber');

gulp.task('pre-test', function () {
  gulp.src(['server/**/*.js'])
    // Covering files
    .pipe(istanbul({includeUntested: true}))
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('coverage', ['pre-test'], function (cb) {
  var mochaErr;
  gulp.src(['test/server/ServerSpec.js'])
    .pipe(plumber())
    .pipe(mocha())
    .on('error', function (err) {
      mochaErr = err;
    })
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports())
    // Enforce a coverage of at least 90%
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
    .on('end', function () {
      cb(mochaErr);
    });
});

gulp.task('server-test', ['pre-test'], function(cb) {
  var mochaErr;

  gulp.src('./test/server/ServerSpec.js', {read: false})
    .pipe(plumber())
    // wait till nodemon get restarted
    .pipe(wait(1500))
    .pipe(mocha({
      reporter: 'nyan'
    }))
    .pipe(istanbul.writeReports())
    // Enforce a coverage of at least 90%
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
    .on('end', function () {
      cb();
    });
});

// the real stuff
gulp.task('default', ['nodemon', 'server-test'], function () {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['server-test']);
  gulp.watch('./test/server/*.js', {debounceDelay: 500}, ['server-test']);
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
