// @flow
var express = require('express');
var router = express.Router();
var handler = require('../helper/handler.js');
var passport = require('passport')

router.get('/', passport.authenticate('jwt', { session: false }), handler.getAllItems);
router.post('/', handler.addOneItem);
router.put('/:id', handler.updateOneItem);
router.delete('/:id', handler.removeOneItem);

module.exports = router;
