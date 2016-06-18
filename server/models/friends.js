var Sequelize = require('sequelize');
var sequelize = require('../db/config.js');

var Friend = sequelize.define('friend', {
  accepted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}, {underscored: true});

//Friend.hasMany(Friend, {as: 'friend'}); //this isn't right either
