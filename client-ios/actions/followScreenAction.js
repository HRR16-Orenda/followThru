// @flow
import * as types from '../constants/ActionTypes';
import { reset } from 'redux-form';
import {
  AsyncStorage,
  Vibration
} from 'react-native';
import { Actions } from 'react-native-router-flux';

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
          console.log("response from add item: ", response)
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
