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
 * handler for getting all users data
 * @input: nothing
 * @return: <Array> - list of users without password info
**/
router.get('/', handler.getAllUsers);

/**
 * handler for testing
 * @input: user id as parameter(req.params.id)
 * @return: <Object> - object of specified user without password info
**/
router.get('/test', function(req, res) {
  client.itemSearch({
    director: 'Quentin Tarantino',
    actor: 'Samuel L. Jackson',
    searchIndex: 'DVD',
    audienceRating: 'R',
    responseGroup: 'ItemAttributes,Offers,Images'
  }).then(function(results){
    console.log(results);
    res.send(results);
  }).catch(function(err){
    console.log(err);
    res.end();
  });
});

/**
 * handler for adding one user data
 * @input: userdata(email, username, password) as req.body
 * @return: <Object> - object of added user without password info
**/
router.post('/', handler.addOneUser);

/**
 * handler for signing up a new user
 * @input: userdata(email, username, password) as req.body
 * @return: <Object> - object of added user without password info
**/
router.post('/signup/', handler.signupUser);

/**
 * handler for logging in a user
 * @input: userdata(email, username, password) as req.body
 * @return: <Object> - object of added user with JWT and without password info
**/
router.post('/login', handler.loginUser);

/**
 * handler for updating one user data
 * @input: user id as parameter(req.params.id)
 *         every field of updated user data(email, username, password) as req.body
 * @return: <Object> - object of updated user without password info
**/
router.put('/:id', handler.updateOneUser);

/**
 * handler for deleting one user data
 * @input: user id as parameter(req.params.id)
 * @return: <Object> - empty object
**/
router.delete('/:id', handler.removeOneUser);

module.exports = router;
