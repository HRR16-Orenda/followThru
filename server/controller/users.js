var User = require('../models/users.js');
var Promise = require('bluebird'); //do i need this?

module.exports = {

  getUser: function(id, callback) {
    User.findById(id).then(function(err, user) {
      if (err) {
        console.log(err);
      } else {
        callback(user);
      }
    });
  },

  addUser: function(user, callback) {
    var user = User.create({
      email: user.email,
      username: user.username,
      password: user.password
    })
    .then(callback(addedUser))
    .catch(function(error) {
      console.log(error);
    })
  },

  updateUser: function(){};

  deleteUser: function(){};

  getAllUsers: function(){};
}
