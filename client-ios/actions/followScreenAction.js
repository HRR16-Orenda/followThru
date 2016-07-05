// @flow
import * as types from '../constants/ActionTypes';
import { reset } from 'redux-form';
import {
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
