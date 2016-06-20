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
  var expectedError = new Error('oops');
  var expectedObject = {};
  var expectedArray = [];

  beforeEach(function () {
    this.sandbox = sinon.sandbox.create()
    req = res = {};
    req.body = {};
    spyOnSend = res.send = this.sandbox.spy();
    spyOnStatus = res.status = this.sandbox.spy();
  });

  afterEach(function () {
    this.sandbox.restore()
  });

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
      describe('getAllUsers()', function () {
        it('should call user.getAll() method and send users data back', function () {
          var stub = this.sandbox.stub(user, 'getAll');
          stub.callsArgWith(0, null, expectedArray);

          handler.getAllUsers(req, res);
          expect(spyOnSend.calledWith(expectedArray)).to.equal(true);
          expect(stub.calledOnce).to.equal(true);
        });
        it('should send 400 status code when user.getAll() throw error', function () {
          var stub = this.sandbox.stub(user, 'getAll');
          stub.callsArgWith(0, expectedError);

          handler.getAllUsers(req, res);
          expect(spyOnStatus.calledWith(400)).to.equal(true);
        });
      });

      describe('addOneUser()', function () {
        it('should call user.addOne() method and send added user back', function () {
          var stub = this.sandbox.stub(user, 'addOne');
          stub.callsArgWith(1, null, expectedObject);

          handler.addOneUser(req, res);
          expect(spyOnSend.calledWith(expectedObject)).to.equal(true);
          expect(stub.calledOnce).to.equal(true);
        });
        it('should send 400 status code when user.addOne() throw error', function () {
          var stub = this.sandbox.stub(user, 'addOne');
          stub.callsArgWith(1, expectedError);

          handler.addOneUser(req, res);
          expect(spyOnStatus.calledWith(400)).to.equal(true);
        });
      });

      describe('removeOneUser()', function () {
        it('hould call user.removeOne() method and send removed user back', function () {
          var stub = this.sandbox.stub(user, 'removeOne');
          stub.callsArgWith(1, null, expectedObject);

          handler.removeOneUser(req, res);
          expect(spyOnSend.calledWith(expectedObject)).to.equal(true);
          expect(stub.calledOnce).to.equal(true);
        });
        it('should send 400 status code when user.removeOne() throw error', function () {
          var stub = this.sandbox.stub(user, 'removeOne');
          stub.callsArgWith(1, expectedError);

          handler.removeOneUser(req, res);
          expect(spyOnStatus.calledWith(400)).to.equal(true);
        });
      });

      describe('updateOneUser()', function () {
        it('should call user.updateOne() method and send updated user back', function () {
          var stub = this.sandbox.stub(user, 'updateOne');
          stub.callsArgWith(2, null, expectedObject);

          handler.updateOneUser(req, res);
          expect(spyOnSend.calledWith(expectedObject)).to.equal(true);
          expect(stub.calledOnce).to.equal(true);
        });
        it('should send 400 status code when user.updateOne() throw error', function () {
          var stub = this.sandbox.stub(user, 'updateOne');
          stub.callsArgWith(2, expectedError);

          handler.updateOneUser(req, res);
          expect(spyOnStatus.calledWith(400)).to.equal(true);
        });
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
