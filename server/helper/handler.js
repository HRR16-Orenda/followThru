var item = require('../controller/items.js');
var user = require('../controller/users.js');
var helper = require('./helpers.js');
var bcrypt = require('bcrypt');
var User = require('../models/users.js');


module.exports = {
  getAllItems: function (req, res) {
    item.getAll(function (err, items) {
      if(err) {return res.sendStatus(400);}
      res.send(items);
    });
  },

  getOneItem: function(req, res) {
    var id = req.params.id;
    item.getOne(id, function(err, item) {
      if(err) {return res.sendStatus(400);}
      res.send(item);
    });
  },

  addOneItem: function(req, res) {
    var newItem = req.body;
    item.addOne(newItem, function(err, newItem) {
      if(err) {return res.sendStatus(400);}
      res.status(201).send(newItem);
    })
  },

  removeOneItem: function(req, res) {
    var id = req.params.id;
    item.removeOne(id, function(err, rows) {
      if(err) {return res.sendStatus(400);}
      res.sendStatus(200);
    } )
  },

  updateOneItem: function(req, res) {
    var id = req.params.id;
    var newProps = req.body;
    item.updateOne(id, newProps, function(err, item) {
      if(err) {return res.sendStatus(400);}
      res.status(202).send(item);
    })
  },

  getAllUsers: function (req, res) {
    user.getAll(function (err, users) {
      if(err) {return res.sendStatus(400);}
      var returnedUsers = users.map(function (user) {
        return helper.cleanUser(user);
      });
      res.send(returnedUsers);
    });
  },

  getOneUser: function (req, res) {
    var id = req.params.id;
    user.getOne(id, function (err, user) {
      if(err) {return res.sendStatus(400);}
      var returnedUser = helper.cleanUser(user);
      res.send(returnedUser);
    });
  },

  addOneUser: function (req, res) {
    var data = req.body;
    user.addOne(data, function (err, user) {
      if(err) {return res.sendStatus(400);}
      var addedUser = helper.cleanUser(user);
      res.send(addedUser);
    });
  },

  signupUser: function (req, res) {
    var data = req.body;
    user.signupOne(data, function (err, userWithJwt) {
      if(err) {return res.sendStatus(400);}
      var addedUser = helper.cleanUser(userWithJwt.addedUser);
      addedUser.jwt = userWithJwt.jwt;
      res.send(addedUser);
    });
  },

  loginUser: function (req, res) {
    var data = req.body;
    user.loginOne(data, function (err, token) {
      if(err) {return res.sendStatus(400);}
      res.send(token);
    })
  },

  removeOneUser: function (req, res) {
    var id = req.params.id;
    user.removeOne(id, function (err, user) {
      if(err) {return res.sendStatus(400);}
      res.sendStatus(200);
    });
  },

  updateOneUser: function (req, res) {
    var id = req.params.id;
    var updatedData = req.body;
    user.updateOne(id, updatedData, function (err, user) {
      if(err) {return res.sendStatus(400);}
      var updatedUser = helper.cleanUser(user);
      res.send(updatedUser);
    });
  }
}
