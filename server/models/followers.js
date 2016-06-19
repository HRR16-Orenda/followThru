var Sequelize = require('sequelize');
var sequelize = require('../db/config.js');

var Follower = sequelize.define('follower', {
  accepted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}, {underscored: true});

//Follower.hasMany(Follower, {as: 'follower'}); //this isn't right either
