var Item = require('../models/items.js');
var _ = require('underscore');

module.exports = {

  getOne: function(id, callback) {
    Item.findById(id)
    .then(function(item) {
      callback(null, item);
    })
    .catch(function(error) {
      callback(error);
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
    .then(function(newItem) {
      callback(null, newItem);
    })
    .catch(function(error) {
      callback(error);
    })
  },

  updateOne: function(id, newProps, callback) {
    Item.update(newProps, {
      where: {id: id},
      returning: true
    })
    .then(function(rowAndData) {
      callback(null, rowAndData[1][0]);
    })
    .catch(function(error) {
      callback(error);
    });
  },

  removeOne: function(id, callback) {
    Item.destroy({where: {
      id: id
    }})
    .then(function(removedRow) {
      callback(null, removedRow);
    })
    .catch(function(error) {
      callback(error);
    });
  },

  getAll: function(callback) {
    Item.findAll()
    .then(function(items) {
      callback(null, items)
    })
    .catch(function(error) {
      callback(error);
    })
  },

  getCategories: function(callback) {
    this.getAll(function(items) {
      var categories = [];
      _.each(items, function(item) {
        categories.push(item.category);
      })
      return categories;
    })
    .then(function(categories) {
      callback(null, categories);
    })
    .catch(function(error) {
      callback(error);
    })
  },

  getSubcategories: function(callback) {
    this.getAll(function(items) {
      var subcategories = [];
      _.each(items, function(item) {
        subcategories.push(item.subcategory);
      })
      return subcategories;
    })
    .then(function(subcategories) {
      callback(null, subcategories);
    })
    .catch(function(error) {
      callback(error);
    })
  }
};
