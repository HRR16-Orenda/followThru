var Sequelize = require('sequelize');
var sequelize = require('../db/config.js');

// Junction table for User <=> User
var Follower = sequelize.define('follower', {

}, {underscored: true});

module.exports = Follower;
