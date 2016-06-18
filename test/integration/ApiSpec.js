var expect = require('chai').expect;
var app = require('../../server/app.js');
var port = process.env.PORT || 4000;
var supertest = require('supertest')(app);

// Uncomment after writing items controller
// var item = require('../../server/controller/items.js');


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

  describe('item controller', function () {
    it('should have addOne() method', function () {
      expect(item.addOne).to.be.a('function');
    });
  });

  describe('Route /items', function () {
    var itemToBeAdded = {
      user: {
        id: 1,
        username: 'brent'
      },
      category: 'books',
      subCategory: 'favorite',
      title: 'The Lord of the Ring',
      completed: false,
      url: null,
      recommendedBy: {
        id: 2,
        username: 'sb'
      }
    };

    before(function (done) {
      item.addOne(itemToBeAdded)
      .then(function (item) {
        done();
      }).catch(function (err) {
        done(err);
      });
    });

    after(function (done) {
      item.clearTable()
        .then(function () {
          done();
        }).catch(function (err) {
          done(err);
        });
    });

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

    describe('POST request', function () {
      it('should return status code 404 if invalid data send', function (done) {
        supertest.post('/items')
        .send({user: 'fake'})
        .expect(404)
        .end(done);
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
