// @flow
import * as types from '../constants/ActionTypes';
import { get, del, post } from '../services/ApiHelper.js';
import type { ItemType } from '../services/Types.js';

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
    get('/api/items')
      .then(res => {
        dispatch(fetchItemSuccess(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchItemFailure());
      });
  }
};

const addItemRequest = () => {
  return {
    type: types.ADD_ITEM_REQUEST
  }
};

const addItemFailure = () => {
  return {
    type: types.ADD_ITEM_FAILURE
  }
};

const addItemSuccess = (item: ItemType) => {
  return {
    type: types.ADD_ITEM_SUCCESS,
    payload: item
  }
};

export const addItem = (item: Object) => {
  console.log(item);
  return (dispatch) => {
    dispatch(addItemRequest());
    post('/api/items', item)
      .then(res => {
        console.log(res.data);
        dispatch(addItemSuccess(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(addItemFailure());
      })
  }
};

const removeItemRequest = () => {
  return {
    type: types.REMOVE_ITEM_REQUEST
  }
};

const removeItemFailure = () => {
  return {
    type: types.REMOVE_ITEM_FAILURE
  }
};

const removeItemSuccess = (id: string) => {
  return {
    type: types.REMOVE_ITEM_SUCCESS,
    payload: id
  }
};

export const removeItem = (id: string) => {
  return (dispatch) => {
    dispatch(removeItemRequest());
    del('/api/items' + '/' + id)
      .then(res => {
        dispatch(removeItemSuccess(id));
      })
      .catch(err => {
        console.error(err);
        dispatch(removeItemFailure());
      })
  }
}
