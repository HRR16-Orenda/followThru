var User = require('../models/users.js');
var _ = require('underscore');

module.exports = {

  getOne: function(id, callback) {
    User.findById(id)
    .then(function(user) {
      callback(null, user);
    })
    .catch(function(error) {
      callback(error);
    })
  },

  addOne: function(user, callback) {
    User.create({
      email: user.email,
      username: user.username,
      password: user.password
    })
    .then(function(addedUser) {
      callback(null, addedUser);
    })
    .catch(function(error) {
      callback(error);
    })
  },

  updateOne: function(id, newProps, callback) {
    User.update(newProps, {
      where: {id: id},
      returning: true
    })
    .then(function(rowAndData) {
      callback(null, rowAndData[1]);
    })
    .catch(function(error) {
      callback(error);
    });
  },

  removeOne: function(id, callback) {
    User.destroy({where: {
      id: id
    }})
    .then(function(removedRow) {
      callback(null, removedRow);
    })
    .catch(function(error) {
      callback(error);
    });
  },

  getAll: function(callback) {
    User.findAll()
      .then(function(users) {
        callback(null, users);
      })
      .catch(function(error) {
        callback(error);
      });
  }
}
