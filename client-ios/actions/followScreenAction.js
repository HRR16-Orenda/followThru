// @flow
import * as types from '../constants/ActionTypes';
import { reset } from 'redux-form';
import {
  AsyncStorage,
  Vibration
} from 'react-native';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

/************************************************************
  Synchronous Action Creator
*************************************************************/

export const selectInbox = () => {
  return {
    type: types.SELECT_INBOX
  }
};

export const selectFollowers = () => {
  return {
    type: types.SELECT_FOLLOWERS
  }
};

export const selectFollowings = () => {
  return {
    type: types.SELECT_FOLLOWINGS
  }
};

const searchUserRequest = () => {
  return {
    type: types.SEARCH_USER_REQUEST
  }
};

const searchUserSuccess = (users: Array<Object>) => {
  return {
    type: types.SEARCH_USER_SUCCESS,
    payload: users
  }
};

const searchUserFailure = () => {
  return {
    type: types.SEARCH_USER_FAILURE
  }
};

const followUserRequest = () => {
  return {
    type: types.FOLLOW_USER_REQUEST
  }
};

const followUserSuccess = (user, updatedSearchResult) => {
  console.log('action creator')
  return {
    type: types.FOLLOW_USER_SUCCESS,
    payload: user,
    updatedSearchResult: updatedSearchResult
  }
};

const followUserFailure = () => {
  return {
    type: types.FOLLOW_USER_FAILURE
  }
};

const unfollowUserRequest = () => {
  return {
    type: types.UNFOLLOW_USER_REQUEST
  }
};

const unfollowUserSuccess = (user) => {
  return {
    type: types.UNFOLLOW_USER_SUCCESS,
    payload: user
  }
};

const unfollowUserFailure = () => {
  return {
    type: types.UNFOLLOW_USER_FAILURE
  }
};

const acceptRecommendRequest = () => {
  return {
    type: types.ACCEPT_RECOMMEND_REQUEST
  }
};

const acceptRecommendSuccess = (updatedList) => {
  return {
    type: types.ACCEPT_RECOMMEND_SUCCESS,
    payload: updatedList
  }
};

const acceptRecommendFailure = () => {
  return {
    type: types.ACCEPT_RECOMMEND_FAILURE
  }
};

/************************************************************
  Thunk Action Creator
*************************************************************/

export const searchUser = (username: string) => {
  return (dispatch, getState) => {
    dispatch(searchUserRequest());
    var id = getState().auth.user.id;
    AsyncStorage.getItem('JWT_TOKEN', function(err, userToken){
      if(err) {
        console.log("error accessing JWT_TOKEN in local storage: ", err);
      } else {
        fetch('http://localhost:3000/api/users/', {
          method: 'GET',
          headers: {
            'User': id.toString(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(userToken).jwt
          }
        }).then((response) => {
          console.log("response from search user: ", response)
          if(response.status === 401) {
            throw new Error('Unauthorized User');
          } else {
            return response.json();
          }
        }).then((data) => {
          var filteredUsers = data.filter((user) => {
            return user.username.includes(username) && user.username !== getState().auth.user.username;
          });
          dispatch(searchUserSuccess(filteredUsers));
        }).catch((error) => {
          console.log(error);
          dispatch(searchUserFailure());
        })
      }
    })
  }
}

export const followUser = (user: Object) => {
  return (dispatch, getState) => {
    dispatch(followUserRequest());
    var id = getState().auth.user.id;
    AsyncStorage.getItem('JWT_TOKEN', function(err, userToken){
      if(err) {
        console.log("error accessing JWT_TOKEN in local storage: ", err);
      } else {
        fetch('http://localhost:3000/api/users/following', {
          method: 'POST',
          headers: {
            'User': id.toString(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(userToken).jwt
          },
          body: JSON.stringify({id: user.id})
        }).then((response) => {
          if(response.status === 401) {
            throw new Error('Unauthorized User');
          }
          return response.json();
        }).then((data) => {
          // check to see if data is empty, which means
          if(data.length > 0) {
            var updatedUser = _.assign({}, getState().auth.user);
            updatedUser.followings = updatedUser.followings ? updatedUser.followings : [];
            updatedUser.followings.push(user);

            var updatedSearchResult = getState().follow.searchResult.slice();
            updatedSearchResult = updatedSearchResult.filter(item => {
              return item.id !== user.id;
            });
            console.log('updated following', updatedUser, updatedSearchResult);
            dispatch(followUserSuccess(updatedUser, updatedSearchResult));
          } else {
            dispatch(followUserFailure());
          }
        }).catch((error) => {
          console.log(error);
          dispatch(followUserFailure());
        })
      }
    })
  }
}

export const unfollowUser = (user: Object) => {
  return (dispatch, getState) => {
    dispatch(unfollowUserRequest());
    var id = getState().auth.user.id;
    AsyncStorage.getItem('JWT_TOKEN', function(err, userToken){
      if(err) {
        console.log("error accessing JWT_TOKEN in local storage: ", err);
      } else {
        fetch('http://localhost:3000/api/users/following', {
          method: 'DELETE',
          headers: {
            'User': id.toString(),
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(userToken).jwt
          },
          body: JSON.stringify({id: user.id})
        }).then((response) => {
          if(response.status === 401) {
            throw new Error('Unauthorized User');
          }
          return response.json();
        }).then((data) => {
          console.log('pleaseplse', data);
          // check to see if data is empty, which means
          if(data.removedRow > 0) {
            var updatedUser = _.assign({}, getState().auth.user);
            updatedUser.followings = updatedUser.followings.filter(item => {
              return item.id !== user.id;
            })

            dispatch(unfollowUserSuccess(updatedUser));
          } else {
            dispatch(unfollowUserFailure());
          }
        }).catch((error) => {
          console.log(error);
          dispatch(unfollowUserFailure());
        })
      }
    })
  }
}

export const acceptRecommend = (item: Object) => {
  return (dispatch, getState) => {
    dispatch(acceptRecommendRequest());
    var id = item.id;
    item.recommended_by_id = null;
    delete item.created_at;
    delete item.updated_at;
    AsyncStorage.getItem('JWT_TOKEN', function(err, userToken){
      if(err) {
        console.log("error accessing JWT_TOKEN in local storage: ", err);
      } else {
        fetch('http://localhost:3000/api/items/' + id, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(userToken).jwt
          },
          body: JSON.stringify(item)
        }).then((response) => {
          if(response.status === 401) {
            throw new Error('Unauthorized User');
          }
          return response.json();
        }).then((data) => {
          console.log('wowwowwow', data);
          // check to see if data is empty, which means
          if(data.recommended_by_id === null) {
            var lists = getState().lists.lists.allItems.slice();
            lists = lists.map(item => {
              if(+item.id === +id) {
                item.recommended_by_id = null;
              }
              return item;
            });
            dispatch(acceptRecommendSuccess(lists));
          } else {
            dispatch(acceptRecommendFailure());
          }
        }).catch((error) => {
          console.log(error);
          dispatch(acceptRecommendFailure());
        })
      }
    })
  }
}
