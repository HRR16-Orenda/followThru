import * as types from '../constants/ActionTypes';
import { update } from "react";

/**
 *  Reducers related to Lists
 */
export default (state = {
  user: {
    username: 'back2future',
    email: 'marty@mcfly.com',
    user_id: 1
  },
  ui: {
//there will only be "isLoading" in final store, not a version for "allLists" and "singleLists"
    isLoading: true
  },
  lists: {
    category: ['default'],
    allItems: []
  },
  filter: '',
  selectedItems: [
    {
      title: 'Blame it on the Rain',
      category: 'movies',
      content: 'Milli Vanilli'
    }
  ]
}, action) => {
  switch (action.type) {

    case types.FETCH_USER_LISTS:
    return {
      ...state,
      lists: action.fetchUserLists
    };

    case types.UPDATE_LISTS_STATE:
    return {
      ...state,
      lists: {
        ...state.lists,
        category: action.category
      }
      // ui: {
      //   isLoading: action.allListsIsLoading,
      // }
    };

    case types.UPDATE_FILTER_STATE:
    return {
      ...state,
      filter: action.filter
    };


    case types.UPDATE_SINGLE_LIST_STATE:
    return {
      ...state,
      selectedItems: action.selectedItems
      // ui: {
      //   isLoading: action.singleListIsLoading,
      // }
    };

    default:
    return state;
  };
};
