var expect = require('chai').expect;
var app = require('../../server/app.js');
var port = process.env.PORT || 4000;
var supertest = require('supertest')(app);


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

  describe('Route /items', function () {
    describe('GET request', function () {
      it('should return status code 200', function (done) {
        supertest.get('/items')
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res.status).to.equal(200);
          done();
        });
      });

      it('should return array with json type', function (done) {
        supertest.get('/items')
        .set('Accept', 'application/json')
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res.body).to.be.an('array');
          expect(res.body[0]).to.have.property('user');
          expect(res.body[0].user.username).to.be.ok;
          expect(res.body[0]).to.have.property('category');
          expect(res.body[0]).to.have.property('subCategory');
          expect(res.body[0]).to.have.property('title');
          expect(res.body[0]).to.have.property('completed');
          expect(res.body[0]).to.have.property('url');
          expect(res.body[0]).to.have.property('createdAt');
          expect(res.body[0]).to.have.property('recommendedBy');
          done();
        });
      });
    });
  });

  describe('Route /users', function () {
    describe('GET request', function () {
      it('should return status code 200', function (done) {
        supertest.get('/users')
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res.status).to.equal(200);
          done();
        });
      });
    });
  });
});
