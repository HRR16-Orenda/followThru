var expect = require('chai').expect;
var app = require('../../server/app.js');
var port = process.env.PORT || 3000;


describe('API Test', function () {
  var server;

  before(function (done) {
    server = app.listen(port, function () {
      done();
    });
  });

  after(function (done) {
    server.close(done);
  });

  it('should pass', function () {
    expect(true).to.equal(true);
  });
});
