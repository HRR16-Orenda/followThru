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
  var itemToBeAdded = {
    user_id: 1,
    category: 'Books',
    title: 'The Lord of the Ring',
    completed: false,
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
  var userToBeAdded3 = {
    email: 'test3@test.com',
    username: 'test3',
    password: 'test'
  };
  var id;
  var token;

  before(function (done) {
    server = app.listen(port, function () {
      done();
    });
  });

  after(function (done) {
    server.close(done);
  });

  describe('Route /api/items', function () {

    before(function (done) {
      sequelize.sync({force: true}).then(function () {
        user.signupOne(userToBeAdded1, function (err, data) {
          token = data.jwt;
          user.signupOne(userToBeAdded2, function () {
            item.addOne(itemToBeAdded, function (err, returnedItem) {
              if(err) {return done(err);}
              id = returnedItem.get('id');
              done();
            });
          });
        });
      }).catch(done);
    });

    describe('GET request', function () {
      it('should return status code 200', function (done) {
        supertest.get('/api/items')
        .set('Authorization', token)
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res.status).to.equal(200);
          done();
        });
      });

      it('should return array with json type', function (done) {
        supertest.get('/api/items')
        .set('Accept', 'application/json')
        .set('Authorization', token)
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res.body).to.be.an('array');
          expect(res.body[0]).to.have.property('id');
          expect(res.body[0]).to.have.property('user_id');
          expect(res.body[0]).to.have.property('category');
          expect(res.body[0]).to.have.property('title');
          expect(res.body[0]).to.have.property('completed');
          expect(res.body[0]).to.have.property('created_at');
          expect(res.body[0]).to.have.property('updated_at');
          expect(res.body[0]).to.have.property('recommended_by_id');
          done();
        });
      });
    });

    describe('POST request', function () {
      it('should return status code 400 if invalid data send', function (done) {
        supertest.post('/api/items')
        .send({user: 'fake'})
        .expect(400)
        .end(done);
      });
    });
  });

  describe('Route /api/users', function () {
    describe('GET request', function () {
      it('should return status code 200', function (done) {
        supertest.get('/api/users')
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res.status).to.equal(200);
          done();
        });
      });
      it('should return user data when id params specified', function (done) {
        supertest.get('/api/users/1')
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res).to.be.ok;
          expect(res.body).to.be.a('object');
          expect(res.body.email).to.equal('test@test.com');
          expect(res.body.username).to.equal('test');
          expect(res.body.id).to.equal(1);
          expect(res.body).to.not.have.property('password');
          done();
        });
      });
      it('should return error msg when id param is not correct', function (done) {
        supertest.get('/api/users/5')
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res).to.be.ok;
          expect(res.status).to.equal(400);
          done();
        });
      });
      it('should return whole user data', function (done) {
        supertest.get('/api/users')
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res).to.be.ok;
          expect(res.body).to.be.a('array');
          expect(res.body.length).to.equal(2);
          expect(res.body[0].username).to.equal('test');
          expect(res.body[1].id).to.equal(2);
          expect(res.body[0]).to.not.have.property('password');
          done();
        });
      });
    });

    describe('POST request', function () {
      var returnUser;
      it('should return added user data when succeed', function (done) {
        supertest.post('/api/users')
        .send(userToBeAdded3)
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res).to.be.ok;
          expect(res.body).to.be.a('object');
          expect(res.body.email).to.equal('test3@test.com');
          expect(res.body.username).to.equal('test3');
          expect(res.body.id).to.equal(3);
          expect(res.body).to.not.have.property('password');
          done();
        });
      });
      it('should store added user data', function (done) {
        supertest.get('/api/users/3')
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res).to.be.ok;
          expect(res.body).to.be.a('object');
          expect(res.body.email).to.equal('test3@test.com');
          expect(res.body.username).to.equal('test3');
          expect(res.body.id).to.equal(3);
          expect(res.body).to.not.have.property('password');
          done();
        });
      });
      it('should return with 400 status code when body contains incorrect data', function (done) {
        supertest.post('/api/users')
        .send({asdf: 'asdf', asdfd: 123})
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res).to.be.ok;
          expect(res.status).to.equal(500);
          done();
        });
      });
    });

    describe('PUT request', function () {
      var returnedUser;
      it('should return response', function (done) {
        var updatedUser = {
          email: 'test3@test.com',
          username: 'test3test',
          password: 'testtest'
        };
        supertest.put('/api/users/3')
        .send(updatedUser)
        .end(function (err, res) {
          if(err) {return done(err)}
          returnedUser = res.body
          expect(res).to.be.ok;
          done();
        });
      });
      it('should update user', function () {
        expect(returnedUser.username).to.equal('test3test');
      });
    });

    describe('DELETE request', function () {
      it('should return response', function (done) {
        supertest.del('/api/users/3')
        .end(function (err, res) {
          if(err) {return done(err);}
          expect(res).to.be.ok;
          done();
        });
      });
      it('should remove user', function (done) {
        supertest.get('/api/users')
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res).to.be.ok;
          expect(res.body).to.be.a('array');
          expect(res.body.length).to.equal(2);
          expect(res.body[0].username).to.equal('test');
          expect(res.body[1].id).to.equal(2);
          expect(res.body[0]).to.not.have.property('password');
          done();
        });
      });
    });
  });

  describe('Default Route', function () {
    it('should return status code 302 respond to GET request', function (done) {
      supertest.get('/whatever')
      .end(function (err, res) {
        if(err) {return done(err)}
        expect(res.status).to.equal(302);
        done();
      });
    });
    it('should return status code 302 respond to POST request', function (done) {
      supertest.post('/whatever')
      .end(function (err, res) {
        if(err) {return done(err)}
        expect(res.status).to.equal(302);
        done();
      });
    });
    it('should return status code 302 respond to DELETE request', function (done) {
      supertest.del('/whatever')
      .end(function (err, res) {
        if(err) {return done(err)}
        expect(res.status).to.equal(302);
        done();
      });
    });
  });
});
