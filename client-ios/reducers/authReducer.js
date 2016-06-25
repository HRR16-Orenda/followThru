import * as types from '../constants/ActionTypes';
import { update } from "react";

export default (state = {
  isFetching: false,
// would fetch this here from AsyncStorage once that is implemented
// isAuthenticated: localStorage.getItem('id_token') ? true : false
  isAuthenticated: false
}, action) => {
  switch (action.type) {
    case types.UPDATE_LISTS_STATE:
    return {
      ...state,
      lists: {
        ...state.lists,
        category: action.category
      }
    };

    default:
    return state;
  };
};
