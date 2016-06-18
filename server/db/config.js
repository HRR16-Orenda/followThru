var username = process.env.RDS_USERNAME;
var password = process.env.RDS_PASSWORD;
var host = process.env.RDS_HOST;
var port = process.env.RDS_PORT;

var sequelize = new Sequelize('test',username, password, {
  host: host + port,
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
