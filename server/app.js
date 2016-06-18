// @flow
var express = require('express');
var bodyParser = require('body-parser');
// Write index route after starting web dev.
// var index = require('./routes/index.js');
var users = require('./routes/users.js');
var items = require('./routes/items.js');
var sequelize = require('./db/config.js');

var app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function (req, res) {
  // console.log(process.env.PORT);
  console.log(process.env.RDS_PORT);
  console.log(process.env.RDS_USERNAME);
  console.log(process.env.RDS_HOST);
  process.env.RDS_PASSWORD
  res.send('Hello world Orenda! Change the world');
});

app.use('/users', users);
app.use('/items', items);

// default route
app.use('/*', function (req, res) {
  res.status(404).send('nonono....');
});

module.exports = app;
