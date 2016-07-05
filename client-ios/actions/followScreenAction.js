// @flow
import * as types from '../constants/ActionTypes';
import { reset } from 'redux-form';
import {
  Vibration
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export const selectSearch = () => {
  return {
    type: types.SELECT_SEARCH
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
