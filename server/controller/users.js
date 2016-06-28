var User = require('../models/users.js');
var _ = require('underscore');
var bcrypt = require('bcrypt');
var secret = require('../helper/config.js');
var jwt = require('jsonwebtoken');
var helpers = require('../helper/helpers')


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

  loginOne: function(data, callback) {
    User.findOne({ where: {email: data.email } })
    .then(function(foundUser){
        if (bcrypt.compareSync(data.password, foundUser.password)) {
        //generate jwt
        var token = jwt.sign(helpers.cleanUser(foundUser), secret, {
          expiresIn: 60 * 60 * 24 * 7 // a week in seconds
        });
        callback( null, { success: true, message: 'JWT ' + token });
      }
      else {
        callback(error)
      }
    })
    .catch(function(){
      callback({ success: false, message: 'Authentication failed. Email does exist.' });
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
