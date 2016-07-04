var Sequelize = require('sequelize');
var sequelize = require('../db/config.js');

var Follower = sequelize.define('follower', {

}, {underscored: true});

module.exports = Follower;
