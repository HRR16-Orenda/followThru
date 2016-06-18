var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('You are sending GET request to /users');
});

module.exports = router;
