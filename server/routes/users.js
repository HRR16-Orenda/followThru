var express = require('express');
var router = express.Router();
var handler = require('../helper/handler.js');

/**
 * handler for getting all users data
 * @input: nothing
 * @return: <Array> - list of users without password info
**/
router.get('/', handler.getAllUsers);

/**
 * handler for getting one user data
 * @input: user id as parameter(req.params.id)
 * @return: <Object> - object of specified user without password info
**/
router.get('/:id', handler.getOneUser);

/**
 * handler for adding one user data
 * @input: userdata(email, username, password) as req.body
 * @return: <Object> - object of added user without password info
**/
router.post('/', handler.addOneUser);

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
