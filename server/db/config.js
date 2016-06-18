var Sequelize = require('sequelize');
var username = process.env.RDS_USERNAME || null;
var password = process.env.RDS_PASSWORD || null;
var host = process.env.RDS_HOST || 'localhost';
var port = process.env.RDS_PORT || '5432';
var dbName = process.env.RDS_DBNAME || 'test';

var sequelize = new Sequelize(dbName, username, password, {
  host: host,
  port: port,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully');
  })
  .catch(function(err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
