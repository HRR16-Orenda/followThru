// @flow
var express = require('express');
var router = express.Router();
var handler = require('../helper/handler.js');
var passport = require('passport')
var amazon = require('amazon-product-api');
var client = amazon.createClient({
  awsId: process.env['AWS_API_KEY'],
  awsSecret: process.env['AWS_API_SECRET'],
  awsTag: process.env['AWS_API_TAG']
});
router.get('/', passport.authenticate('jwt', { session: false }), handler.getAllItems);
router.post('/', passport.authenticate('jwt', { session: false }), handler.addOneItem);
router.put('/:id', passport.authenticate('jwt', { session: false }), handler.updateOneItem);
router.delete('/:id', passport.authenticate('jwt', { session: false }), handler.removeOneItem);

module.exports = router;
