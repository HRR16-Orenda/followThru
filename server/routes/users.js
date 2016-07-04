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
 * handler for signing up a new user
 * @input: userdata(email, username, password) as req.body
 * @return: <Object> - object of added user without password info
**/
router.post('/signup/', handler.signupUser);

/**
 * handler for following one user
 * @input: user is as req.headers & target username as req.body
 * @return: <Object> - empty object
**/
router.post('/following', handler.followUser);

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

/**
 * handler for unfollowing one user
 * @input: user id as req.headers & target id as req.body
 * @return: <Object> - empty object
**/
router.delete('/following', handler.unfollowUser);



module.exports = router;
