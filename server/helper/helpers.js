module.exports.cleanUser = function(user) {
  var result = {
    email: user.get('email'),
    username: user.get('username'),
    id: user.get('id'),
    isAdmin: user.get('isAdmin'),
    followings: user.get('followings'),
    followers: user.get('followers'),
    created_at: user.get('created_at')
  };
  // If user data contains follower data, clean them up
  if(user.followers) {
    result.followers = user.followers.map(function(item) {
      return module.exports.cleanUser(item);
    });
  }
  // If user data contains following data, clean them up
  if(user.followings) {
    result.followings = user.followings.map(function(item) {
      return module.exports.cleanUser(item);
    });
  }
  return result;
};
