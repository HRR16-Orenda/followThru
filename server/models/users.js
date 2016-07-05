var Sequelize = require('sequelize');
var sequelize = require('../db/config.js');
var bcrypt = require('bcrypt');
var Item = require('./items.js');
var Follower = require('./followers.js');
var User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  underscored: true,
  classMethods: {
    associate: function(models) {
      User.hasMany(models.User, {through: 'follower'});
    }
  }
});


User.belongsToMany(User, {as: 'followings', through: Follower, foreignKey: 'followedById'});
User.belongsToMany(User, {as: 'followers', through: Follower, foreignKey: 'followingId'});


// it worked!
User.findById(1).then(function(user){
  User.findById(2).then(function(data) {
    user.addFollowing(data).then(function(data) {
      console.log(data[0]);
    });
  })
})

// it worked
// User.findOne({
//   where: {
//     id: 2
//   },
//   include: [
//     {
//       model: User,
//       as: 'followings'
//     }
//   ]
// }).then(function(data) {
//   console.log(data.get('followings'));
// })

module.exports = User;
