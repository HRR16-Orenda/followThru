// @flow
import * as types from '../constants/ActionTypes';
import { get } from '../services/ApiHelper.js';

const fetchItemRequest = () => {
  return {
    type: types.FETCH_ITEM_REQUEST
  }
};

const fetchItemFailure = () => {
  return {
    type: types.FETCH_ITEM_FAILURE
  }
};

const fetchItemSuccess = (items: Object[]) => {
  return {
    type: types.FETCH_ITEM_SUCCESS,
    payload: items
  }
};

export const fetchItem = () => {
  return (dispatch) => {
    dispatch(fetchItemRequest());
    get('/items')
      .then(res => {
        dispatch(fetchItemSuccess(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchItemFailure());
      });
  }
};
