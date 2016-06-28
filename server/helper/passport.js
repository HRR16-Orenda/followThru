var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models/users.js');
var secret = require('./config.js')

module.exports = function(passport){
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done){
    console.log(jwt_payload);
    User.findOne({ where: {id: jwt_payload.id} })
    .then(function(user){
      if(user){
        done(null, user);
      } else {
        done(null)
      }
    })
    .catch(function(err){
      return done(err);
    });
  }));
};
