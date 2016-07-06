// @flow
var express = require('express');
var router = express.Router();
var handler = require('../helper/handler.js');
var passport = require('passport')

router.get('/', passport.authenticate('jwt', { session: false }), handler.getAllItems);
router.post('/', passport.authenticate('jwt', { session: false }), handler.addOneItem);
router.post('/share', passport.authenticate('jwt', { session: false }), handler.shareItem);
router.put('/:id', passport.authenticate('jwt', { session: false }), handler.updateOneItem);
router.delete('/:id', passport.authenticate('jwt', { session: false }), handler.removeOneItem);

module.exports = router;
