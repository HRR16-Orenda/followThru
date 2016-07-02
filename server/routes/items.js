// @flow
var express = require('express');
var router = express.Router();
var handler = require('../helper/handler.js');
var passport = require('passport')
var Yelp = require('yelp');


router.get('/', passport.authenticate('jwt', { session: false }), handler.getAllItems);
router.post('/', passport.authenticate('jwt', { session: false }), handler.addOneItem);
router.put('/:id', passport.authenticate('jwt', { session: false }), handler.updateOneItem);
router.delete('/:id', passport.authenticate('jwt', { session: false }), handler.removeOneItem);
router.get('/test', function(req, res) {
  var yelp = new Yelp({
      consumer_key: process.env['YELP_API_KEY'],
      consumer_secret: process.env['YELP_API_SECRET'],
      token: process.env['YELP_API_TOKEN'],
      token_secret: process.env['YELP_API_TOKEN_SECRET']
  });
  yelp.search({ term: 'pizza', location: 'SF', limit: 1 })
    .then(function(data) {
      var results = data.businesses;
      console.log(results);
      res.send(results);
    })
    .catch(function(err) {
      console.error(err);
    });
});
module.exports = router;
