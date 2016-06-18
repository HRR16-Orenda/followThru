var Sequelize = require('sequelize');
var sequelize = require('../db/config.js');

var Item = sequelize.define('item', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    //unique: true(?)
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  category: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  subcategory: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: //this needs javascript to determine
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {underscored: true});
//sequelize automatically creates createdAt and updatedAt
Item.belongsTo(User, {as: 'recommendedBy'}); //adds a recommendedBy_id attribute?
Item.sync();
module.exports = Item;
