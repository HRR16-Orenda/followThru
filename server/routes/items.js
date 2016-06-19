// @flow
var express = require('express');
var router = express.Router();
var handler = require('../handler/handler.js');

router.get('/', handler.getAllItems);
// router.post('/', handler.addOneItem);

module.exports = router;
