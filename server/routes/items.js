// @flow
var express = require('express');
var router = express.Router();
var handler = require('../helper/handler.js');
var passport = require('passport')
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();

router.get('/', passport.authenticate('jwt', { session: false }), handler.getAllItems);
router.post('/', passport.authenticate('jwt', { session: false }), handler.addOneItem);
router.put('/:id', passport.authenticate('jwt', { session: false }), handler.updateOneItem);
router.delete('/:id', passport.authenticate('jwt', { session: false }), handler.removeOneItem);

router.get('/test', function(req, res) {
  // Search tracks whose artist's name contains 'Love'
  spotifyApi.searchTracks('track:Love', { limit : 5 })
    .then(function(data) {
      console.log('Search tracks by "Love" in the artist name', data.body);
      res.send(data.body);
    }, function(err) {
      console.log('Something went wrong!', err);
    });
});

module.exports = router;
