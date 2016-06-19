var express = require('express');
var router = express.Router();
var handler = require('../handler/handler.js');

router.get('/', handler.getAllUsers);

module.exports = router;
