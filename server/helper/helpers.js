module.exports.cleanUser = function(user) {
  var result = {
    email: user.get('email'),
    username: user.get('username'),
    id: user.get('id'),
    isAdmin: user.get('isAdmin'),
    created_at: user.get('created_at')
  };
  return result;
};
