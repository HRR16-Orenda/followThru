// @flow
var app = require('./server/app.js');
var port = process.env.PORT || 3000;

app.listen(port, function(req, res) {
  console.log('listening on ' + port);
});
