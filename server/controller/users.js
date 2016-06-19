var User = require('../models/users.js');
var _ = require('underscore');

module.exports = {

  getOne: function(id, callback) {
    User.findById(id)
    .then(function(user) {
      callback(user);
    })
    .catch(function(error) {
      console.log(error);
    })
  },

  addOne: function(user, callback) {
    User.create({
      email: user.email,
      username: user.username,
      password: user.password
    })
    .then(function(addedUser) {
      callback(addedUser);
    })
    .catch(function(error) {
      console.log(error);
    })
  },

  updateOne: function(id, newProps, callback) {
    getUser(id, function(user) {
      _.extend(user, newProps).save();
    })
    .then(function(updatedUser) {
      callback(updatedUser);
    })
    .catch(function(error) {
      console.log(error);
    })
  },

  removeOne: function(id) {
    getUser(id, function(user) {
      user.destroy();
    })
    .catch(function(error) {
      console.log(error);
    })
  },

  getAll: function(callback) {
    User.findAll()
    .then(function(users) {
      callback(users);
    })
    .catch(function(error) {
      console.log(error);
    })
  }
}
