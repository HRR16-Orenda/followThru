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

router.get('/test', function(req, res) {
  client.itemSearch({
    // Amazon product API configuration
    keywords: 'warcraft',
    searchIndex: 'UnboxVideo',
    // Configuration for returned data
    responseGroup: 'Small,Images'
  }).then(function(results){
    // Refine returned data
    var refinedData = {
      url: results[0]['DetailPageURL'][0],
      img: results[0]['MediumImage'][0]['URL'][0],
      content: results[0]['ItemAttributes'][0]['Title'] + ' : ' + results[0]['ItemAttributes'][0]['Author']
    }

    res.send(results);
  }).catch(function(err){
    console.log(err);
  });
})

module.exports = router;
