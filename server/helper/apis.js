var amazon = require('amazon-product-api');
var _ = require('lodash');
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();
var Yelp = require('yelp');

if(!process.env.CIRCLECI && process.env.NODE_ENV !== 'production') {
  require('../../env.js');
}

var client = amazon.createClient({
  awsId: process.env['AWS_API_KEY'],
  awsSecret: process.env['AWS_API_SECRET'],
  awsTag: process.env['AWS_API_TAG']
});

module.exports.amazonBook = function(newItem) {
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
      content: '' + results[0]['ItemAttributes'][0]['Author']
    }

    _.assign(newItem, refinedData);
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
      content: '' + results[0]['ItemAttributes'][0]['Director']
    }

    _.assign(newItem, refinedData);
    return newItem;
  }).catch(function(err){
    console.log(err);
  });
}

module.exports.amazonBuy = function(newItem) {
  return client.itemSearch({
    // Amazon product API configuration
    keywords: newItem.title,
    searchIndex: 'All',
    // Configuration for returned data
    responseGroup: 'Small,Images'
  }).then(function(results){
    // Refine returned data
    var refinedData = {
      url: 'https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=' + newItem.title,
      img: results[0]['LargeImage'][0]['URL'][0],
      content: results[0]['ItemAttributes'][0]['Title'][0]
    }

    _.assign(newItem, refinedData);
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
      content: '' + results[0]['ItemAttributes'][0]['Director']
    }

    _.assign(newItem, refinedData);
    console.log(newItem);
    return newItem;
  }).catch(function(err){
    console.log(err);
  });
}

module.exports.amazonBuy = function(newItem) {
  return client.itemSearch({
    // Amazon product API configuration
    keywords: newItem.title,
    searchIndex: 'All',
    // Configuration for returned data
    responseGroup: 'Small,Images'
  }).then(function(results){
    // Refine returned data
    var refinedData = {
      url: 'https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=' + newItem.title,
      img: results[0]['LargeImage'][0]['URL'][0],
      content: results[0]['ItemAttributes'][0]['Title'][0]
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
      content: data[0].artists[0].name
    }

    _.assign(newItem, refinedData);
    return newItem;
  }).catch(function(err) {
    console.log('Something went wrong!', err);
  });
};

module.exports.yelp = function(newItem) {
  var yelp = new Yelp({
      consumer_key: process.env['YELP_API_KEY'],
      consumer_secret: process.env['YELP_API_SECRET'],
      token: process.env['YELP_API_TOKEN'],
      token_secret: process.env['YELP_API_TOKEN_SECRET']
  });
  // location is hard coded
  // should be refactored after testing Geolocation feature

  var location = newItem.location.latitude + "," + newItem.location.longitude

  return yelp.search({ term: newItem.title, ll: location, limit: 1 })
    .then(function(data) {
      var result = data.businesses[0];
      var refinedData = {
        url: result.mobile_url,
        img: result.image_url,
        content: result.name
      }
      _.assign(newItem, refinedData);
      return newItem;
    })
    .catch(function(err) {
      console.error(err);
    });
}
