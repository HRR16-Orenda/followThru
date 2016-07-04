var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var wait = require('gulp-wait');
var istanbul = require('gulp-istanbul');
var plumber = require('gulp-plumber');
var webpackStream = require('webpack-stream');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var gutil = require("gulp-util");
var webpackConfig = require('./webpack.config.js');
var path = require('path');

gulp.task('webpack', function() {
  return gulp.src('./client-web/index.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('build/'));
});

gulp.task("webpack-dev-server", function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath:  webpackConfig.output.publicPath,
    contentBase: "./build/",
    hot: true,
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

gulp.task('watch', function() {
  gulp.watch('./client-web/**/*.*', ['webpack']);
});

gulp.task('webpackHMR', ['webpack-dev-server', 'watch']);

gulp.task('pre-test', function () {
  gulp.src(['server/**/*.js'])
    // Covering files
    .pipe(istanbul({includeUntested: true}))
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('coverage', ['pre-test'], function (cb) {
  var mochaErr;
  gulp.src(['test/server/index.js'])
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

  gulp.src('./test/server/index.js', {read: false})
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
gulp.task('default', ['nodemon', 'server-test', 'webpack'], function () {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['server-test']);
  gulp.watch('./test/server/*.js', {debounceDelay: 500}, ['server-test']);
  gulp.watch('./client-web/**/*.js', {debounceDelay: 500}, ['webpack']);
});

gulp.task('test', ['nodemon', 'server-test'], function () {
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['server-test']);
  gulp.watch('./test/server/*.js', {debounceDelay: 500}, ['server-test']);
});

// our gulp-nodemon task
gulp.task('nodemon', function (cb) {
  var started = false;
  return nodemon({
    script: './index',
    watch: ['./server', './test', './build'],
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
