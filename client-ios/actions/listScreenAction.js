// @flow
import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import { reset } from 'redux-form';
import {
  AsyncStorage
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
  return {
    type: types.DELETE_CONFIRM_ON
  }
};

export const deleteConfirmOff = () => {
  return {
    type: types.DELETE_CONFIRM_OFF
  }
};
