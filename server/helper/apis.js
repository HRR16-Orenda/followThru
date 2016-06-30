var amazon = require('amazon-product-api');
var _ = require('lodash');

var client = amazon.createClient({
  awsId: "AKIAIBOPOFKRSZJ47XUA",
  awsSecret: "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",
  awsTag: "echo304-20"
});

module.exports.amazon = function(newItem) {
  return client.itemSearch({
    // Amazon product API configuration
    keywords: newItem.title,
    searchIndex: 'Books',
    // Configuration for returned data
    responseGroup: 'Small,Images,BrowseNodes'
  }).then(function(results){
    // Refine returned data
    var refinedData = {
      url: results[0]['DetailPageURL'][0],
      img: results[0]['MediumImage'][0]['URL'][0],
      content: results[0]['ItemAttributes'][0]['Title'] + ' : ' + results[0]['ItemAttributes'][0]['Author']
    }

    // Add refined data to newItem obj
    _.assign(newItem, refinedData);

    return newItem;
    console.log(newItem);
  }).catch(function(err){
    console.log(err);
  });
}
