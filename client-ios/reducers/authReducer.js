import * as types from '../constants/ActionTypes';
import { update } from "react";

export default (state = {
  user: {},
  isFetching: false,
  isAuthenticated: false,
}, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        user: action.creds
    };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        user: action.user,
        errorMessage: ''
    };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.message
    };

    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        user: action.creds
    };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: '',
        user: action.user
    };

    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.message
    };

    case types.LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated
    };

    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: ''
    };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errorMessage: action.message
    };

    case types.AUTHORIZE_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
    };

    case types.AUTHORIZE_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: true,
        user: action.user
    };

    case types.AUTHORIZE_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isFetching: action.isFetching,

    };

    // case types.AUTHORIZING_USER:
    //   return {
    //     ...state,
    //     isAuthenticated: false,
    // };

    default:
      return state;
  };
};
