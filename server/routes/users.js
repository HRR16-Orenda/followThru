var express = require('express');
var router = express.Router();
var handler = require('../handler/handler.js');

router.get('/', handler.getAllUsers);
router.post('/', handler.addOneUser);
router.put('/:id', handler.updateOneUser);
router.delete('/:id', handler.removeOneUser);

module.exports = router;
