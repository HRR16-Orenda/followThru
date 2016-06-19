var Sequelize = require('sequelize');
var sequelize = require('../db/config.js');
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
  }
}, {
  underscored: true,
  classMethods: {
    associate: function(models) {
      User.hasMany(models.User, {
        as: 'follower',
        through: models.Follower});
    }
  }
});
//sequelize automatically creates createdAt and updatedAt
// User.hasMany(Item); circular referencing occured (Item already belongsTo User)
User.sync();
module.exports = User;
