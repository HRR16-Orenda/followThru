process.env.NODE_ENV = 'test';
var expect = require('chai').expect;
var sinon = require('sinon');
require('sinon-as-promised');
var bcrypt = require('bcrypt');
var helper = require('../../server/helper/helpers.js');
var item = require('../../server/controller/items.js');
var Item = require('../../server/models/items.js');
var user = require('../../server/controller/users.js');
var User = require('../../server/models/users.js');

describe('Server-side Unit test', function () {
  var req, res, spy;
  var expectedError = new Error('oops');
  var expectedObject = {};
  var expectedArray = [{},{}];

  beforeEach(function () {
    this.sandbox = sinon.sandbox.create()

    genSaltSyncStub = this.sandbox.stub(bcrypt, 'genSaltSync');
    hashSyncStub = this.sandbox.stub(bcrypt, 'hashSync');

    findOneStub = this.sandbox.stub(User, 'findOne');
    findOneStub2 = this.sandbox.stub(Item, 'findOne');
    findAllStub = this.sandbox.stub(User, 'findAll');
    findAllStub2 = this.sandbox.stub(Item, 'findAll');
    createStub = this.sandbox.stub(User, 'create');
    createStub2 = this.sandbox.stub(Item, 'create');
    findByIdStub = this.sandbox.stub(User, 'findById');
    findByIdStub2 = this.sandbox.stub(Item, 'findById');
    destroyStub = this.sandbox.stub(User, 'destroy');
    destroyStub2 = this.sandbox.stub(Item, 'destroy');
    updateStub = this.sandbox.stub(User, 'update');
    updateStub2 = this.sandbox.stub(Item, 'update');
  });

  afterEach(function () {
    this.sandbox.restore()
  });

  describe('item controller', function () {
    describe('getAll() method', function () {
      it('should be a function that takes 1 argument', function(){
        expect(item.getAll).to.be.a('function');
        expect(item.getAll.length).to.equal(2);
      });
      it('should invoke the callback with items upon success', function(done) {
        findAllStub2.resolves(expectedArray)
        item.getAll(undefined, function(err, items) {
          expect(items).to.deep.equal(expectedArray);
          expect(err).to.equal(null);
          done();
        });
      });
      it('should invoke the callback with error upon failure', function(done) {
        findAllStub2.returns(Promise.reject(expectedError));
        item.getAll(undefined, function(err, items) {
          expect(err).to.deep.equal(expectedError);
          done();
        });
      });
    });

    describe('addOne() method', function () {
      it('should be a function that takes 2 arguments', function(){
        expect(item.addOne).to.be.a('function');
        expect(item.addOne.length).to.equal(2);
      });
      it('should invoke the callback with item upon success', function(done) {
        createStub2.resolves(expectedObject)
        item.addOne({}, function(err, item) {
          expect(item).to.deep.equal(expectedObject);
          expect(err).to.equal(null);
          done();
        });
      });
      it('should invoke the callback with error upon failure', function(done) {
        createStub2.returns(Promise.reject(expectedError));
        item.addOne({}, function(err, item) {
          expect(err).to.deep.equal(expectedError);
          done();
        });
      });
    });

    describe('getOne() method', function () {
      it('should be a function that takes 2 arguments', function(){
        expect(item.getOne).to.be.a('function');
        expect(item.getOne.length).to.equal(2);
      });
      it('should invoke the callback with item upon success', function(done) {
        findByIdStub2.resolves(expectedObject)
        item.getOne(1, function(err, item) {
          expect(item).to.deep.equal(expectedObject);
          expect(err).to.equal(null);
          done();
        });
      });
      it('should invoke the callback with error upon failure', function(done) {
        findByIdStub2.returns(Promise.reject(expectedError));
        item.getOne(1, function(err, item) {
          expect(err).to.deep.equal(expectedError);
          done();
        });
      });
    });

    describe('removeOne() method', function () {
      it('should be a function that takes 2 arguments', function(){
        expect(item.removeOne).to.be.a('function');
        expect(item.removeOne.length).to.equal(2);
      });
      it('should invoke the callback with deleted item upon success', function(done) {
        destroyStub2.resolves(1)
        item.removeOne(1, function(err, item) {
          expect(item).to.deep.equal(1);
          expect(err).to.equal(null);
          done();
        });
      });
      it('should invoke the callback with error upon failure', function(done) {
        destroyStub2.returns(Promise.reject(expectedError));
        item.removeOne(1, function(err, item) {
          expect(err).to.deep.equal(expectedError);
          done();
        });
      });
    });

    //need to work on this one more
    describe('updateOne() method', function () {
      it('should be a function that takes 3 arguments', function(){
        expect(item.updateOne).to.be.a('function');
        expect(item.updateOne.length).to.equal(3);
      });
      it('should invoke the callback with updated item upon success', function(done) {
        updateStub2.resolves([1, [{key: 'value'}]])
        item.updateOne(1, {}, function(err, item) {
          if (err) {return done(err);}
          expect(item).to.deep.equal({key: 'value'});
          expect(err).to.equal(null);
          done();
        });
      });
      it('should invoke the callback with error upon failure', function(done) {
        updateStub2.returns(Promise.reject(expectedError));
        item.updateOne(1, {}, function(err, item) {
          expect(err).to.deep.equal(expectedError);
          done();
        });
      });
    });
  });

  describe('user controller', function () {
    describe('getAll() method', function () {
      it('should be a function that takes 1 argument', function () {
        expect(user.getAll).to.be.a('function');
        expect(user.getAll.length).to.equal(1);
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
      it('should be a function that takes 2 arguments', function () {
        expect(user.addOne).to.be.a('function');
        expect(user.addOne.length).to.equal(2);
      });
      it('should invoke callback func with a user data when succeed', function (done) {
        createStub.resolves(expectedObject)
        user.addOne({} ,function (err, data) {
          expect(data).to.deep.equal(expectedObject);
          expect(genSaltSyncStub.callCount).to.equal(1);
          expect(hashSyncStub.callCount).to.equal(1);
          expect(err).to.equal(null);
          done();
        });
      });
      it('should invoke bcrypt.genSaltSync() and bcrypt.hashSync()', function (done) {
        createStub.resolves(expectedObject)
        user.addOne({} ,function (err, data) {
          expect(genSaltSyncStub.callCount).to.equal(1);
          expect(hashSyncStub.callCount).to.equal(1);
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

    describe('getOne() method', function () {
      it('should be a function that takes 2 arguments', function () {
        expect(user.getOne).to.be.a('function');
        expect(user.getOne.length).to.equal(2);
      });
      it('should invoke callback func with a user data when succeed', function (done) {
        findByIdStub.resolves(expectedObject)
        user.getOne(1, function (err, data) {
          expect(data).to.deep.equal(expectedObject);
          expect(err).to.equal(null);
          done();
        });
      });
      it('should invoke callback func with error when fail', function (done) {
        findByIdStub.rejects(expectedError)
        user.getOne(1, function (err, data) {
          expect(err).to.deep.equal(expectedError);
          done();
        });
      });
    })

    describe('removeOne() method', function () {
      it('should be a function that takes 2 arguments', function () {
        expect(user.removeOne).to.be.a('function');
        expect(user.removeOne.length).to.equal(2);
      });
      it('should invoke callback func with a user data when succeed', function (done) {
        destroyStub.resolves(1)
        user.removeOne(1, function (err, data) {
          expect(data).to.deep.equal(1);
          expect(err).to.equal(null);
          done();
        });
      });
      it('should invoke callback func with error when fail', function (done) {
        destroyStub.rejects(expectedError)
        user.removeOne(1, function (err, data) {
          expect(err).to.deep.equal(expectedError);
          done();
        });
      });
    });

    describe('updateOne() method', function () {
      it('should be a function that takes 3 arguments', function () {
        expect(user.updateOne).to.be.a('function');
        expect(user.updateOne.length).to.equal(3);
      });
      it('should invoke callback func with a user data when succeed', function (done) {
        updateStub.resolves([1, [{test: 'test'}]])
        user.updateOne(1, {}, function (err, data) {
          if(err) {return done(err);}
          expect(data).to.deep.equal({test: 'test'});
          expect(err).to.equal(null);
          done();
        });
      });
      it('should invoke callback func with error when fail', function (done) {
        updateStub.rejects(expectedError)
        user.updateOne(1, {}, function (err, data) {
          expect(err).to.deep.equal(expectedError);
          done();
        });
      });
    });
  });
});
