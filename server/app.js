// @flow
var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

module.exports = app;
