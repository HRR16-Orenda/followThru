// @flow
import * as types from '../constants/ActionTypes';

const fetchItemRequest = () => {
  return {
    type: types.FETCH_ITEM_REQUEST
  }
};

const fetchItemSuccess = (items: Object[]) => {
  return {
    type: types.FETCH_ITEM_SUCCESS,
    payload: items
  }
};
