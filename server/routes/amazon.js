var express = require('express');
var router = express.Router();
var handler = require('../helper/handler.js');
var amazon = require('amazon-product-api');

var client = amazon.createClient({
  awsId: "AKIAIBOPOFKRSZJ47XUA",
  awsSecret: "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",
  awsTag: "echo304-20"
});

/**
 * handler for getting item from amazon
 * @input: query string parameter(req.params.query)
 * @return: <Object> - object of specified user without password info
**/
router.get('/:query', handler.getAmazonItem);

module.exports = router;
