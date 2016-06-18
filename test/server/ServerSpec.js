var expect = require('chai').expect;
// var item = require('../../server/controller/items.js');

describe('Test for Test', function () {
  it('should pass', function () {
    expect(true).to.equal(true);
  });
});

describe('item controller', function () {
  it('should have addOne() method', function () {
    expect(item.addOne).to.be.a('function');
  });
  it('should have removeAll() method', function () {
    expect(item.removeAll).to.be.a('function');
  });
  it('should have removeOne() method', function () {
    expect(item.removeOne).to.be.a('function');
  });
  it('should have modifyOne() method', function () {
    expect(item.modifyOne).to.be.a('function');
  });
});

describe('user controller', function () {
  it('should have addOne() method', function () {
    expect(user.addOne).to.be.a('function');
  });
  it('should have removeAll() method', function () {
    expect(user.removeAll).to.be.a('function');
  });
  it('should have removeOne() method', function () {
    expect(user.removeOne).to.be.a('function');
  });
  it('should have modifyOne() method', function () {
    expect(user.modifyOne).to.be.a('function');
  });
});
