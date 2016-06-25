// @flow
import * as types from '../constants/ActionTypes';
import { get, del, post } from '../services/ApiHelper.js';
import type { UserType } from '../services/Types.js';

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

const addUserRequest = () => {
  return {
    type: types.ADD_USER_REQUEST
  }
};

const addUserFailure = () => {
  return {
    type: types.ADD_USER_FAILURE
  }
};

const addUserSuccess = (user: UserType) => {
  return {
    type: types.ADD_USER_SUCCESS,
    payload: user
  }
};

export const addUser = (user: Object) => {
  return (dispatch) => {
    dispatch(addUserRequest());
    post('/api/users', user)
      .then(res => {
        console.log(res.data);
        dispatch(addUserSuccess(res.data));
      })
      .catch(err => {
        console.error(err);
        dispatch(addUserFailure());
      })
  }
};

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
};
