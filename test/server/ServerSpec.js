var expect = require('chai').expect;
var sinon = require('sinon');
var handler = require('../../server/handler/handler.js');
var item = require('../../server/controller/items.js');
var user = require('../../server/controller/users.js');

describe('Server-side Unit test', function () {
  beforeEach(function () {
    this.sandbox = sinon.sandbox.create()
  })

  afterEach(function () {
    this.sandbox.restore()
  })

  describe('Route handler Test', function () {
    describe('/users Route', function () {
      it('GET request handler should call user.getAll() method', function () {
        var req = res = {};
        var spy = res.send = sinon.spy();
        var stub = this.sandbox.stub(user, 'getAll');
        stub.returns({});

        handler.getAllUsers(req, res);
        expect(stub.calledOnce).to.equal(true);
      });
    });

    describe('/items Route', function () {
      it('GET request handler should call item.getAll() method', function () {
        var req = res = {};
        var spy = res.send = sinon.spy();
        var stub = this.sandbox.stub(item, 'getAll');
        stub.returns({});

        handler.getAllItems(req, res);
        expect(stub.calledOnce).to.equal(true);
      });
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
      it('should have removeAll() method', function () {
        expect(item.removeAll).to.be.a('function');
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
      it('should have removeAll() method', function () {
        expect(user.removeAll).to.be.a('function');
      });
      it('should have removeOne() method', function () {
        expect(user.removeOne).to.be.a('function');
      });
      it('should have updateOne() method', function () {
        expect(user.updateOne).to.be.a('function');
      });
    });
  });
});
