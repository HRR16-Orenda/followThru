var User = require('../models/users.js');
var _ = require('underscore');
var bcrypt = require('bcrypt');

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
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    User.create({
      email: user.email,
      username: user.username,
      password: hash
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
      callback(null, rowAndData[1][0]);
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
};
