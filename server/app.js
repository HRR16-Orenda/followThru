// @flow
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  console.log(process.env.PORT);
  console.log(process.env.RDS_PORT);
  console.log(process.env.RDS_USERNAME);

  res.send('Hello world');
});

module.exports = app;
