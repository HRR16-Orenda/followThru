var Follower = require('../models/follower.js');
var _ = require('underscore');
var Promise = require('bluebird'); //do i need this?

module.exports = {

  //this doesn't make any goddamn sense
  getAllFollowers: function(userId, callback) {
    Follower.findById(userId)
    .then(function(user) {
      var followers = [];
      followers.push(friend_id);
      followers;
      callback(followers);
    })
    .catch(function(error) {
      console.log(error);
    });
  },

  getFollower: function(userId, followerId, callback) {
    Follower.findById(userId)
    .then(function(user) {
      var friend = //where id === followerId;
      callback(friend);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}
