process.env.NODE_ENV = 'test';
var expect = require('chai').expect;
var sinon = require('sinon');
var handler = require('../../server/handler/handler.js');
var item = require('../../server/controller/items.js');
var user = require('../../server/controller/users.js');
var app = require('../../server/app.js');
var supertest = require('supertest')(app);

var port = process.env.PORT || 4000;

describe('Server-side Unit test', function () {
  var req, res, spy;

  beforeEach(function () {
    this.sandbox = sinon.sandbox.create()
    req = res = {};
    spy = res.send = this.sandbox.spy();
  })

  afterEach(function () {
    this.sandbox.restore()
  })

  describe('Controller Test', function () {
    describe('item controller', function () {
      it('should have getAll() method', function () {
        expect(item.getAll).to.be.a('function');
      });
      it('should have addOne() method', function () {
        expect(item.addOne).to.be.a('function');
      });
      it('should have getOne() method', function () {
        expect(item.getOne).to.be.a('function');
      });
      it('should have removeOne() method', function () {
        expect(item.removeOne).to.be.a('function');
      });
      it('should have updateOne() method', function () {
        expect(item.updateOne).to.be.a('function');
      });
    });

    describe('user controller', function () {
      it('should have getAll() method', function () {
        expect(user.getAll).to.be.a('function');
      });
      it('should have addOne() method', function () {
        expect(user.addOne).to.be.a('function');
      });
      it('should have getOne() method', function () {
        expect(user.getOne).to.be.a('function');
      });
      it('should have removeOne() method', function () {
        expect(user.removeOne).to.be.a('function');
      });
      it('should have updateOne() method', function () {
        expect(user.updateOne).to.be.a('function');
      });
    });
  });

  describe('Route handler Test', function () {
    describe('/users Route', function () {
      it('handler.getAllUsers() should call user.getAll() method', function () {
        var stub = this.sandbox.stub(user, 'getAll');
        stub.returns([]);

        handler.getAllUsers(req, res);
        expect(spy.calledOnce).to.equal(true);
        expect(stub.calledOnce).to.equal(true);
      });

      it('handler.removeAllUsers() should call user.removeAll() method', function () {
        var stub = this.sandbox.stub(user, 'removeAll');
        stub.returns({});

        handler.removeAllUsers(req, res);
        expect(spy.calledOnce).to.equal(true);
        expect(stub.calledOnce).to.equal(true);
      });

      it('handler.addOneUser() should call user.addOne() method', function () {
        var stub = this.sandbox.stub(user, 'addOne');
        stub.returns({});

        handler.addOneUser(req, res);
        expect(spy.calledOnce).to.equal(true);
        expect(stub.calledOnce).to.equal(true);
      });

      it('handler.removeOneUser() should call user.removeOne() method', function () {
        var stub = this.sandbox.stub(user, 'removeOne');
        stub.returns({});

        handler.removeOneUser(req, res);
        expect(spy.calledOnce).to.equal(true);
        expect(stub.calledOnce).to.equal(true);
      });

      it('handler.updateOneUser() should call user.updateOne() method', function () {
        var stub = this.sandbox.stub(user, 'updateOne');
        stub.returns({});

        handler.updateOneUser(req, res);
        expect(spy.calledOnce).to.equal(true);
        expect(stub.calledOnce).to.equal(true);
      });
    });

    describe('/items Route', function () {
      it('handler.getAllItems should call item.getAll() method', function () {
        var stub = this.sandbox.stub(item, 'getAll');
        stub.returns([]);

        handler.getAllItems(req, res);
        expect(spy.calledOnce).to.equal(true);
        expect(stub.calledOnce).to.equal(true);
      });

      it('handler.removeAllItems() should call item.removeAll() method', function () {
        var stub = this.sandbox.stub(item, 'removeAll');
        stub.returns({});

        handler.removeAllItems(req, res);
        expect(spy.calledOnce).to.equal(true);
        expect(stub.calledOnce).to.equal(true);
      });

      it('handler.addOneItem should call item.addOne() method', function () {
        var stub = this.sandbox.stub(item, 'addOne');
        stub.returns({});

        handler.addOneItem(req, res);
        expect(spy.calledOnce).to.equal(true);
        expect(stub.calledOnce).to.equal(true);
      });

      it('handler.removeOneItem() should call item.removeOne() method', function () {
        var stub = this.sandbox.stub(item, 'removeOne');
        stub.returns({});

        handler.removeOneItem(req, res);
        expect(spy.calledOnce).to.equal(true);
        expect(stub.calledOnce).to.equal(true);
      });

      it('handler.updateOneItem() should call item.updateOne() method', function () {
        var stub = this.sandbox.stub(item, 'updateOne');
        stub.returns({});

        handler.updateOneItem(req, res);
        expect(spy.calledOnce).to.equal(true);
        expect(stub.calledOnce).to.equal(true);
      });
    });
  });
});

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

  describe('Route /', function () {
    describe('GET request', function () {
      it('should return status code 200', function (done) {
        supertest.get('/')
        .end(function (err, res) {
          if(err) {return done(err)}
          expect(res.status).to.equal(200);
          done();
        });
      });
    });
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
    });

    describe('POST request', function () {
      it('should return status code 404 if invalid data send', function (done) {
        supertest.post('/items')
        .send({user: 'fake'})
        .expect(400)
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

  describe('Default Route', function () {
    it('should return status code 404 respond to GET request', function (done) {
      supertest.get('/whatever')
      .end(function (err, res) {
        if(err) {return done(err)}
        expect(res.status).to.equal(404);
        done();
      });
    });
    it('should return status code 404 respond to POST request', function (done) {
      supertest.post('/whatever')
      .end(function (err, res) {
        if(err) {return done(err)}
        expect(res.status).to.equal(404);
        done();
      });
    });
    it('should return status code 404 respond to DELETE request', function (done) {
      supertest.delete('/whatever')
      .end(function (err, res) {
        if(err) {return done(err)}
        expect(res.status).to.equal(404);
        done();
      });
    });
  });

});
