var Item = require('../models/items.js');
var _ = require('underscore');
var Promise = require('bluebird'); //do i need this?

module.exports = {

  getItem: function(id, callback) {
    Item.findById(id)
    .then(callback(item))
    .catch(function(error) {
      console.log(error);
    });
  },

  addItem: function(item, callback) {
    var item = Item.create({
      user_id: item.user_id,
      category: item.category,
      subcategory: item.subcategory,
      title: item.title,
      recommendedBy_id: item.recommendedBy_id
    })
    .then(callback(item))
    .catch(function(error) {
      console.log(error);
    })
  },

  updateItem: function(id, newProps, callback) {
    getItem(id, function(item) {
      _.extend(item, newProps).save();
      return item;
    })
    .then(callback(item))
    .catch(function(error) {
      console.log(error);
    })
  };

  deleteItem: function(id) {
    getItem(id, function(item) {
      return item.destroy();
    })
    .catch(function(error) {
      console.log(error);
    })
  };

  getAllItems: function(callback) {
    Item.findAll()
    .then(function(items) {
      callback(items)
    })
    .catch(function(error) {
      console.log(error);
    })
  };

  getCategories: function(callback) {
    getAllItems(function(items) {
      var categories = [];
      _.each(items, function(item) {
        categories.push(item.category);
      })
      return categories;
    })
    .then(callback(categories))
    .catch(function(error) {
      console.log(error);
    })
  };

  getSubcategories: function(callback) {
    getAllItems(function(items) {
      var subcategories = [];
      _.each(items, function(item) {
        subcategories.push(item.subcategory);
      })
      return subcategories;
    })
    .then(callback(subcategories))
    .catch(function(error) {
      console.log(error);
    })
  };
}
