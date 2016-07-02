var amazon = require('amazon-product-api');
var _ = require('lodash');
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();


if(!process.env.CIRCLECI && process.env.NODE_ENV !== 'production') {
  require('../../env.js');
}

var client = amazon.createClient({
  awsId: process.env['AWS_API_KEY'],
  awsSecret: process.env['AWS_API_SECRET'],
  awsTag: process.env['AWS_API_TAG']
});

module.exports.amazon = function(newItem) {
  return client.itemSearch({
    // Amazon product API configuration
    keywords: newItem.title,
    searchIndex: 'Books',
    // Configuration for returned data
    responseGroup: 'Small,Images'
  }).then(function(results){
    // Refine returned data
    var refinedData = {
      url: results[0]['DetailPageURL'][0],
      img: results[0]['LargeImage'][0]['URL'][0],
      content: results[0]['ItemAttributes'][0]['Title'] + ' : ' + results[0]['ItemAttributes'][0]['Author']
    }

    _.assign(newItem, refinedData);
    console.log(newItem);
    return newItem;
  }).catch(function(err){
    console.log(err);
  });
};

module.exports.amazonMovie = function(newItem) {
  return client.itemSearch({
    // Amazon product API configuration
    keywords: newItem.title,
    searchIndex: 'UnboxVideo',
    // Configuration for returned data
    responseGroup: 'Small,Images'
  }).then(function(results){
    // Refine returned data
    var refinedData = {
      url: 'https://www.rottentomatoes.com/search/?search=' + newItem.title,
      img: results[0]['LargeImage'][0]['URL'][0],
      content: results[0]['ItemAttributes'][0]['Title'] + ' : ' + results[0]['ItemAttributes'][0]['Director']
    }

    _.assign(newItem, refinedData);
    console.log(newItem);
    return newItem;
  }).catch(function(err){
    console.log(err);
  });
}

module.exports.spotify = function(newItem) {
  // Search tracks whose artist's name contains 'Love'
  return spotifyApi.searchTracks('track:' + newItem.title, { limit : 1 })
  .then(function(data) {
    var data = data.body.tracks.items;
    var refinedData = {
      url: data[0].album.external_urls.spotify,
      img: data[0].album.images[1].url,
      content: data[0].name + data[0].artists[0].name
    }

    _.assign(newItem, refinedData);
    console.log(newItem);
    return newItem;
  }).catch(function(err) {
    console.log('Something went wrong!', err);
  });
};
