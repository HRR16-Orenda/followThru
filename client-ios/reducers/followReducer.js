import * as types from '../constants/ActionTypes';
import { update } from "react";

export default (state = {
  searchResult: [],
  selection: 'inbox'
}, action) => {
  switch (action.type) {
    case types.SELECT_INBOX:
      return {
        ...state,
        selection: 'inbox'
    };

    case types.SELECT_FOLLOWERS:
      return {
        ...state,
        selection: 'followers'
    };

    case types.SELECT_FOLLOWINGS:
      return {
        ...state,
        selection: 'followings'
    };

    case types.SEARCH_USER_SUCCESS:
      return {
        ...state,
        searchResult: action.payload
    };

    default:
      return state;
  };
};
