// @flow
var express = require('express');
var router = express.Router();
var handler = require('../helper/handler.js');
var passport = require('passport')

/**
 * handler for getting all items data
 * @input: user id as req.headers.user;
 * @return: <Array> - list of items
**/
router.get('/', passport.authenticate('jwt', { session: false }), handler.getAllItems);

/**
 * handler for adding one item data
 * @input: item data object as req.body
 * @return: <Object> - object of added item
**/
router.post('/', passport.authenticate('jwt', { session: false }), handler.addOneItem);

/**
 * handler for sharing item
 * @input: item to be shared as req.body.item & id of users who get recommendation as req.body.users
 * @return: null
**/
router.post('/share', passport.authenticate('jwt', { session: false }), handler.shareItem);

/**
 * handler for updating item
 * @input: user id as req.params.id & new data as req.body
 * @return: updated item
**/
router.put('/:id', passport.authenticate('jwt', { session: false }), handler.updateOneItem);

/**
* handler for unfollowing one user
* @input: user id as req.headers & target id as req.body
* @return: <Object> - empty object
**/
router.delete('/:id', passport.authenticate('jwt', { session: false }), handler.removeOneItem);

module.exports = router;
