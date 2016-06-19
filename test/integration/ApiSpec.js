process.env.NODE_ENV = 'test';
var expect = require('chai').expect;
var app = require('../../server/app.js');
var port = process.env.PORT || 4000;
var supertest = require('supertest')(app);
var item = require('../../server/controller/items.js');
var user = require('../../server/controller/users.js');
var sequelize = require('../../server/db/config.js');
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

  describe('Route /items', function () {
    var itemToBeAdded = {
      user_id: 1,
      category: 'books',
      subcategory: 'favorite',
      title: 'The Lord of the Ring',
      completed: false,
      url: null,
      recommendedBy_id: 2
    };
    var userToBeAdded1 = {
      email: 'test@test.com',
      username: 'test',
      password: 'test'
    };
    var userToBeAdded2 = {
      email: 'test2@test.com',
      username: 'test2',
      password: 'test'
    };
    var id;

    before(function (done) {
      user.addOne(userToBeAdded1, function () {
        user.addOne(userToBeAdded2, function () {
          item.addOne(itemToBeAdded, function (item) {
            id = item.id;
            done();
          });
        });
      });
    });

    after(function (done) {
      sequelize.sync({force: true}).then(function () {
        done();
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
          expect(res.body[0]).to.have.property('id');
          expect(res.body[0]).to.have.property('category');
          expect(res.body[0]).to.have.property('subcategory');
          expect(res.body[0]).to.have.property('title');
          expect(res.body[0]).to.have.property('completed');
          expect(res.body[0]).to.have.property('url');
          expect(res.body[0]).to.have.property('created_at');
          expect(res.body[0]).to.have.property('updated_at');
          expect(res.body[0]).to.have.property('recommended_by_id');
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
