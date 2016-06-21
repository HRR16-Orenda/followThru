process.env.NODE_ENV = 'test';
var expect = require('chai').expect;
var sinon = require('sinon');
require('sinon-as-promised');
var handler = require('../../server/helper/handler.js');
var helper = require('../../server/helper/helpers.js');
var item = require('../../server/controller/items.js');
var user = require('../../server/controller/users.js');
var User = require('../../server/models/users.js');
var app = require('../../server/app.js');
var supertest = require('supertest')(app);

var port = process.env.PORT || 4000;

describe('Server-side Unit test', function () {
  var req, res, spy;
  var expectedError = new Error('oops');
  var expectedObject = {};
  var expectedArray = [{},{}];

  beforeEach(function () {
    this.sandbox = sinon.sandbox.create()
    req = res = {};
    req.body = {};
    req.params = {};
    spyOnSend = res.send = this.sandbox.spy(function(){return this;});
    spyOnEnd = res.end = this.sandbox.spy(function(){return this;});
    spyOnStatus = res.status = this.sandbox.spy(function(){return this;});
    findAllStub = this.sandbox.stub(User, 'findAll');
    createStub = this.sandbox.stub(User, 'create');
    findByIdStub = this.sandbox.stub(User, 'findById');
  });

  afterEach(function () {
    this.sandbox.restore()
  });

  describe('Helper Method test', function () {
    it('cleanUser should refine user data', function () {
      var expected = {
        email: 'test',
        username: 'test',
        id: 3
      };
      var input = {
        get: function(field) {
          var user = {};
          user.id = 3;
          user.email = 'test';
          user.username = 'test';
          user.password = 'test;'
          return user[field];
        }
      };
      expect(helper.cleanUser(input)).to.deep.equal(expected);
    });
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
      describe('getAll() method', function () {
        it('should be a function', function () {
          expect(user.getAll).to.be.a('function');
        });
        it('should invoke callback func with users data when succeed', function (done) {
          findAllStub.resolves(expectedArray)
          user.getAll(function (err, data) {
            expect(data).to.deep.equal(expectedArray);
            expect(err).to.equal(null);
            done();
          });
        });
        it('should invoke callback func with error when fail', function (done) {
          findAllStub.rejects(expectedError)
          user.getAll(function (err, data) {
            expect(err).to.deep.equal(expectedError);
            done();
          });
        });
      });

      describe('addOne() method', function () {
        it('should be a function', function () {
          expect(user.addOne).to.be.a('function');
        });
        it('should invoke callback func with a user data when succeed', function (done) {
          createStub.resolves(expectedObject)
          user.addOne({} ,function (err, data) {
            expect(data).to.deep.equal(expectedObject);
            expect(err).to.equal(null);
            done();
          });
        });
        it('should invoke callback func with error when fail', function (done) {
          createStub.rejects(expectedError)
          user.addOne({}, function (err, data) {
            expect(err).to.deep.equal(expectedError);
            done();
          });
        });
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
          var stub2 = this.sandbox.stub(helper, 'cleanUser');
          stub.callsArgWith(0, null, expectedArray);
          stub2.returns({});

          handler.getAllUsers(req, res);
          expect(spyOnSend.calledWith(expectedArray)).to.equal(true);
          expect(stub.calledOnce).to.equal(true);
          expect(stub2.called).to.equal(true);
        });
        it('should send 400 status code when user.getAll() throw error', function () {
          var stub = this.sandbox.stub(user, 'getAll');
          stub.callsArgWith(0, expectedError);

          handler.getAllUsers(req, res);
          expect(spyOnStatus.calledWith(400)).to.equal(true);
        });
      });

      describe('getOneUser()', function () {
        it('should call user.getOne() method and send added user back', function () {
          var stub = this.sandbox.stub(user, 'getOne');
          var stub2 = this.sandbox.stub(helper, 'cleanUser');
          stub.callsArgWith(1, null, expectedObject);
          stub2.returns(expectedObject);

          handler.getOneUser(req, res);
          expect(spyOnSend.calledWith(expectedObject)).to.equal(true);
          expect(stub.calledOnce).to.equal(true);
          expect(stub2.calledOnce).to.equal(true);
        });
        it('should send 400 status code when user.getOne() throw error', function () {
          var stub = this.sandbox.stub(user, 'getOne');
          stub.callsArgWith(1, expectedError);

          handler.getOneUser(req, res);
          expect(spyOnStatus.calledWith(400)).to.equal(true);
        });
      });

      describe('addOneUser()', function () {
        it('should call user.addOne() method and send added user back', function () {
          var stub = this.sandbox.stub(user, 'addOne');
          var stub2 = this.sandbox.stub(helper, 'cleanUser');
          stub.callsArgWith(1, null, expectedObject);
          stub2.returns(expectedObject);

          handler.addOneUser(req, res);
          expect(spyOnSend.calledWith(expectedObject)).to.equal(true);
          expect(stub.calledOnce).to.equal(true);
          expect(stub2.calledOnce).to.equal(true);
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
