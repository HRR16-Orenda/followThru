// @flow
import * as types from '../constants/ActionTypes';
import { get, del } from '../services/ApiHelper.js';

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


const fetchUserRequest = () => {
  return {
    type: types.FETCH_USER_REQUEST
  }
};

const fetchUserFailure = () => {
  return {
    type: types.FETCH_USER_FAILURE
  }
};

const fetchUserSuccess = (users: Object[]) => {
  return {
    type: types.FETCH_USER_SUCCESS,
    payload: users
  }
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    get('/api/users')
      .then(res => {
        dispatch(fetchUserSuccess(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(fetchUserFailure());
      });
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

const removeUserRequest = () => {
  return {
    type: types.REMOVE_USER_REQUEST
  }
};

const removeUserFailure = () => {
  return {
    type: types.REMOVE_USER_FAILURE
  }
};

const removeUserSuccess = (id: string) => {
  return {
    type: types.REMOVE_USER_SUCCESS,
    payload: id
  }
};

export const removeUser = (id: string) => {
  return (dispatch) => {
    dispatch(removeUserRequest());
    del('/api/users' + '/' + id)
      .then(res => {
        dispatch(removeUserSuccess(id));
      })
      .catch(err => {
        console.error(err);
        dispatch(removeUserFailure());
      })
  }
}
