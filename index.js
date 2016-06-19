// @flow
var app = require('./server/app.js');
var port = process.env.PORT || 3000;
var sequelize = require('./server/db/config.js');

sequelize.sync().then(function () {
  console.log('DB synced!');
  app.listen(port, function() {
    console.log('listening on ' + port);
  });
});
