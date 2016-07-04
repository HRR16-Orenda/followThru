process.env.NODE_ENV = 'test';
var expect = require('chai').expect;
var sinon = require('sinon');
require('sinon-as-promised');
var handler = require('../../server/helper/handler.js');
var helper = require('../../server/helper/helpers.js');
var item = require('../../server/controller/items.js');
var user = require('../../server/controller/users.js');

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
    req.headers = {};
    spyOnSend = res.send = this.sandbox.spy(function(){return this;});
    spyOnEnd = res.end = this.sandbox.spy(function(){return this;});
    spyOnStatus = res.status = this.sandbox.spy(function(){return this;});
    spyOnSendStatus = res.sendStatus = this.sandbox.spy(function(){return this;});
  });

  afterEach(function () {
    this.sandbox.restore()
  });

  describe('Helper Method test', function () {
    it('cleanUser should refine user data', function () {
      var input = {
        get: function(field) {
          var user = {};
          user.id = 3;
          user.email = 'test';
          user.username = 'test';
          user.password = 'test';
          user.created_at = 'test';
          user.isAdmin = false;
          return user[field];
        }
      };
      expect(helper.cleanUser(input)).to.have.property('email');
      expect(helper.cleanUser(input)).to.have.property('username');
      expect(helper.cleanUser(input)).to.have.property('isAdmin');
      expect(helper.cleanUser(input)).to.not.have.property('password');
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
          expect(spyOnSendStatus.calledWith(400)).to.equal(true);
        });
      });

      describe('getOneUser()', function () {
        it('should call user.getOne() method and send user back', function () {
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
          expect(spyOnSendStatus.calledWith(400)).to.equal(true);
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
          expect(spyOnSendStatus.calledWith(400)).to.equal(true);
        });
      });

      describe('removeOneUser()', function () {
        it('should call user.removeOne() method and send removed user back', function () {
          var stub = this.sandbox.stub(user, 'removeOne');
          stub.callsArgWith(1, null, expectedObject);

          handler.removeOneUser(req, res);
          expect(spyOnSendStatus.calledWith(200)).to.equal(true);
          expect(stub.calledOnce).to.equal(true);
        });
        it('should send 400 status code when user.removeOne() throw error', function () {
          var stub = this.sandbox.stub(user, 'removeOne');
          stub.callsArgWith(1, expectedError);

          handler.removeOneUser(req, res);
          expect(spyOnSendStatus.calledWith(400)).to.equal(true);
        });
      });

      describe('updateOneUser()', function () {
        it('should call user.updateOne() method and send updated user back', function () {
          var stub = this.sandbox.stub(user, 'updateOne');
          var stub2 = this.sandbox.stub(helper, 'cleanUser');
          stub.callsArgWith(2, null, expectedObject);
          stub2.returns(expectedObject);

          handler.updateOneUser(req, res);
          expect(spyOnSend.calledWith(expectedObject)).to.equal(true);
          expect(stub.calledOnce).to.equal(true);
          expect(stub2.calledOnce).to.equal(true);
        });
        it('should send 400 status code when user.updateOne() throw error', function () {
          var stub = this.sandbox.stub(user, 'updateOne');
          stub.callsArgWith(2, expectedError);

          handler.updateOneUser(req, res);
          expect(spyOnSendStatus.calledWith(400)).to.equal(true);
        });
      });
    });

    describe('/items Route', function () {
      describe('getAllItems()', function(){
        describe('without user header', function() {
          it('should call items.getAll() method and send items back', function () {
            var stub = this.sandbox.stub(item, 'getAll');
            stub.callsArgWith(1, null, expectedArray);
            handler.getAllItems(req, res);
            expect(spyOnSend.calledWith(expectedArray)).to.equal(true);
            expect(stub.calledOnce).to.equal(true);
          });
          it('should send status code of 400 when item.getAll() throws an error', function() {
            var stub = this.sandbox.stub(item, 'getAll');
            stub.callsArgWith(1, expectedError);

            handler.getAllItems(req,res);
            expect(spyOnSendStatus.calledWith(400)).to.equal(true);
          });
        })
      });

      // describe('addOneItem()', function(){
      //   it('should call items.addOne() method and send added item back', function () {
      //     var apis = {
      //       amazon: function() {}
      //     };
      //     var stub = this.sandbox.stub(item, 'addOne');
      //     var stub2 = this.sandbox.stub(apis, 'amazon');
      //     stub2.resolves('');
      //     stub.callsArgWith(1, null, expectedObject);
      //
      //     handler.addOneItem(req, res);
      //     expect(spyOnSend.calledWith(expectedObject)).to.equal(true);
      //     expect(stub.calledOnce).to.equal(true);
      //   });
      //   it('should send status code of 400 when item.addOne() throws an error', function() {
      //     var stub = this.sandbox.stub(item, 'addOne');
      //     stub.callsArgWith(1, expectedError);
      //
      //     handler.addOneItem(req,res);
      //     expect(spyOnSendStatus.calledWith(400)).to.equal(true);
      //   });
      // });

      describe('removeOneItem()', function(){
        it('should call items.addOne() method and send removed item back', function () {
          var stub = this.sandbox.stub(item, 'removeOne');
          stub.callsArgWith(1, null, expectedObject);

          handler.removeOneItem(req, res);
          expect(spyOnSendStatus.calledWith(200)).to.equal(true);
          expect(stub.calledOnce).to.equal(true);
        });
        it('should send status code of 400 when item.removeOne() throws an error', function() {
          var stub = this.sandbox.stub(item, 'removeOne');
          stub.callsArgWith(1, expectedError);

          handler.removeOneItem(req, res);
          expect(spyOnSendStatus.calledWith(400)).to.equal(true);

        });
      });

      describe('updateOneItem()', function () {
        it('should call item.updateOne() method and send updated item back', function () {
          var stub = this.sandbox.stub(item, 'updateOne');
          stub.callsArgWith(2, null, expectedObject);

          handler.updateOneItem(req, res);
          expect(spyOnSend.calledWith(expectedObject)).to.equal(true);
          expect(stub.calledOnce).to.equal(true);
        });
        it('should send 400 status code when item.updateOne() throw error', function () {
          var stub = this.sandbox.stub(item, 'updateOne');
          stub.callsArgWith(2, expectedError);

          handler.updateOneItem(req, res);
          expect(spyOnSendStatus.calledWith(400)).to.equal(true);
        });
      });

      describe('getOneItem()', function () {
        it('should call item.getOne() method and send item back', function () {
          var stub = this.sandbox.stub(item, 'getOne');
          stub.callsArgWith(1, null, expectedObject);

          handler.getOneItem(req, res);
          expect(spyOnSend.calledWith(expectedObject)).to.equal(true);
          expect(stub.calledOnce).to.equal(true);
        });
        it('should send 400 status code when item.getOne() throw error', function () {
          var stub = this.sandbox.stub(item, 'getOne');
          stub.callsArgWith(1, expectedError);

          handler.getOneItem(req, res);
          expect(spyOnSendStatus.calledWith(400)).to.equal(true);
        });
      });
    });
  });
});
