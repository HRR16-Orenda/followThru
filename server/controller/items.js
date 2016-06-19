var Item = require('../models/items.js');
var _ = require('underscore');

module.exports = {

  getItem: function(id, callback) {
    Item.findById(id)
    .then(function(item) {
      callback(item);
    })
    .catch(function(error) {
      console.log(error);
    });
  },

  addOne: function(item, callback) {
    Item.create({
      user_id: item.user_id,
      title: item.title,
      category: item.category,
      subcategory: item.subcategory,
      url: item.url,
      completed: false,
      recommendedBy_id: item.recommendedBy_id
    })
    .then(function(item) {
      callback(item);
    })
    .catch(function(error) {
      console.log(error);
    })
  },

  updateItem: function(id, newProps, callback) {
    getItem(id, function(item) {
      _.extend(item, newProps).save();
    })
    .then(function(item) {
      callback(item);
    })
    .catch(function(error) {
      console.log(error);
    })
  },

  removeOne: function(id, cb) {
    this.getItem(id, function(item) {
      item.destroy()
        .then(function (rows) {
          cb(rows);
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  },

  getAll: function(callback) {
    Item.findAll()
    .then(function(items) {
      callback(items)
    })
    .catch(function(error) {
      console.log(error);
    })
  },

  getCategories: function(callback) {
    getAllItems(function(items) {
      var categories = [];
      _.each(items, function(item) {
        categories.push(item.category);
      })
      return categories;
    })
    .then(function(categories) {
      callback(categories);
    })
    .catch(function(error) {
      console.log(error);
    })
  },

  getSubcategories: function(callback) {
    getAllItems(function(items) {
      var subcategories = [];
      _.each(items, function(item) {
        subcategories.push(item.subcategory);
      })
      return subcategories;
    })
    .then(function(subcategories) {
      callback(subcategories);
    })
    .catch(function(error) {
      console.log(error);
    })
  }
};
