var express = require('express');
var router = express.Router();
var handler = require('../helper/handler.js');

/**
 * handler for getting item from amazon
 * @input: query string parameter(req.params.query)
 * @return: <Object> - most relevant single item contains data inside of it
**/
router.get('/:query', handler.getAmazonItem);

module.exports = router;
