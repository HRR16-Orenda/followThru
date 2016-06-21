module.exports.cleanUser = function(user) {
  var result = {
    email: user.get('email'),
    username: user.get('username'),
    id: user.get('id')
  };
  return result;
};
