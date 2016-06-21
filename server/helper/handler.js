var item = require('../controller/items.js');
var user = require('../controller/users.js');
var helper = require('./helpers.js');

module.exports = {
  getAllItems: function (req, res) {
    item.getAll(function (items) {
      res.send(items);
    });
  },

  getAllUsers: function (req, res) {
    user.getAll(function (err, users) {
      if(err) {return res.status(400).send();}
      var returnedUsers = users.map(function (user) {
        return helper.cleanUser(user);
      });
      res.send(returnedUsers);
    });
  },

  getOneUser: function (req, res) {
    var id = req.params.id;
    user.getOne(id, function (err, user) {
      if(err) {return res.status(400).send();}
      var returnedUser = helper.cleanUser(user);
      res.send(returnedUser);
    });
  },

  addOneUser: function (req, res) {
    var data = req.body;
    user.addOne(data, function (err, user) {
      if(err) {return res.status(400).send();}
      var addedUser = helper.cleanUser(user);
      res.send(addedUser);
    });
  },

  removeOneUser: function (req, res) {
    var id = req.params.id;
    user.removeOne(id, function (err, user) {
      if(err) {return res.status(400).send();}
      res.send(user);
    });
  },

  updateOneUser: function (req, res) {
    var id = req.params.id;
    var updatedData = req.body;
    user.updateOne(id, updatedData, function (err, user) {
      if(err) {return res.status(400).send();}
      var updatedUser = helper.cleanUser(user);
      res.send(updatedUser);
    });
  }
}
