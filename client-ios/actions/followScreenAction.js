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

const followUserSuccess = (users, updatedSearchResult) => {
  console.log('action creator')
  return {
    type: types.FOLLOW_USER_SUCCESS,
    payload: users,
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

const unfollowUserSuccess = (users: Array<Object>) => {
  return {
    type: types.UNFOLLOW_USER_SUCCESS,
    payload: users
  }
};

const unfollowUserFailure = () => {
  return {
    type: types.UNFOLLOW_USER_FAILURE
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
