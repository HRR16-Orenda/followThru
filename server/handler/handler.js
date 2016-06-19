var item = require('../controller/items.js');
var user = require('../controller/users.js');

module.exports = {
  getAllItems: function (req, res) {
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
    item.getAll();
    // Should have interaction with DB controller to get whole items
    res.send(mockData);
  },

  getAllUsers: function (req, res) {
    user.getAll();
    res.send([{},{}]);
  }
}
