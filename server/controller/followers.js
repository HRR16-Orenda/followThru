//
// var Follower = require('../models/followers.js');
// var User = require('../models/users.js')
// var _ = require('underscore');
//
// module.exports = {
//
//  //revisit once follower schema is complete/confirmed
//   getAllFollowers: function(userId, callback) {
//     Follower.findById(userId)
//     .then(function(user) {
//       var followers = [];
//       followers.push(friend_id);
//       followers;
//       callback(followers);
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
//   },
//  //this one too
//   getFollower: function(userId, followerId, callback) {
//     Follower.findById(userId)
//     .then(function(user) {
//       var friend = //where id === followerId;
//       callback(friend);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//   }
// }
