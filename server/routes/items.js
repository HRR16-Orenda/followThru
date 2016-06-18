// @flow
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  // mock data for testing
  var mockData = [
    {
      id: 1,
      user: {
        id: 1,
        username: 'brent'
      },
      category: 'books',
      subCategory: 'favorite',
      title: 'The Lord of the Ring',
      completed: false,
      url: null,
      createdAt: Date.now(),
      recommendedBy: {
        id: 2,
        username: 'sb'
      }
    }
  ];

  // Should have interaction with DB controller to get whole items
  res.send(mockData);
});


module.exports = router;
