import * as types from '../constants/ActionTypes';
import { update } from "react";

export default (state = {
  searchResult: [],
  selection: 'search'
}, action) => {
  switch (action.type) {
    case types.SELECT_SEARCH:
      return {
        ...state,
        selection: 'search'
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

    default:
      return state;
  };
};
