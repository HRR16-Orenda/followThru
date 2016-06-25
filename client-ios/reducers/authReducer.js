import * as types from '../constants/ActionTypes';
import { update } from "react";

export default (state = {
  isFetching: false,
// would fetch this here from AsyncStorage once that is implemented
// isAuthenticated: localStorage.getItem('id_token') ? true : false
  isAuthenticated: false
}, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
        user: action.creds
    };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        lists: {}
    };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        lists: {}
    };

    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        lists: {}
    };

    default:
    return state;
  };
};
