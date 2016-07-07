// @flow
import * as types from '../constants/ActionTypes';
import {
  AsyncStorage,
  Vibration
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export const modalOpen = (item: Object) => {
  return {
    type: types.MODAL_OPEN,
    payload: item
  }
};

export const modalClose = () => {
  return {
    type: types.MODAL_CLOSE
  }
};

export const deleteConfirmOn = () => {
  Vibration.vibrate(200);
  return {
    type: types.DELETE_CONFIRM_ON
  }
};

export const deleteConfirmOff = () => {
  return {
    type: types.DELETE_CONFIRM_OFF
  }
};

export const dateChange = (date) => {
  return {
    type: types.DATE_CHANGE,
    payload: date
  }
};

const shareItemRequest = () => {
  return {
    type: types.SHARE_ITEM_REQUEST
  }
};

const shareItemSuccess = () => {
  return {
    type: types.SHARE_ITEM_SUCCESS
  }
};

const shareItemFailure = () => {
  return {
    type: types.SHARE_ITEM_FAILURE
  }
};

/************************************************************
  Thunk Action Creator
*************************************************************/

export const shareItem = (item: Object) => {
  return (dispatch, getState) => {
    dispatch(shareItemRequest());
    var id = getState().auth.user.id;
    var users = getState().auth.user.followings.map(user => user.id);
    item.recommended_by_id = id;
    AsyncStorage.getItem('JWT_TOKEN', function(err, userToken){
      if(err) {
        console.log("error accessing JWT_TOKEN in local storage: ", err);
      } else {
        fetch('http://localhost:3000/api/items/share', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(userToken).jwt
          },
          body: JSON.stringify({item: item, users: users})
        }).then((response) => {
          if(response.status === 401) {
            throw new Error('Unauthorized User');
          }
          return response.json();
        }).then((data) => {
          console.log(data);
          // check to see if data is empty, which means
          if(data.length > 0) {
            dispatch(shareItemSuccess());
          } else {
            dispatch(shareItemFailure());
          }
        }).catch((error) => {
          console.log(error);
          dispatch(shareItemFailure());
        })
      }
    })
  }
}
