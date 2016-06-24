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
    isLoading: true,
    isUserTyping: false
  },
  lists: {
    category: ['default'],
    allItems: []
  },
  filter: '',
  selectedItems: [
    {
      title: 'Captain America',
      category: 'Movies',
      content: 'Milli Vanilli'
    }
  ],
  userInput: {
    title: '',
    category: '',
    content: ''
  }
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

    case types.USER_TYPE_START:
    return {
      ...state,
      ui: {
        isUserTyping: true
      },
      userInput: {
        ...state.userInput,
        title: action.userInput.title
      }
    }

    case types.ADD_NEW_LIST_ITEM:
    var allItemsCopy = state.lists.allItems.slice();
    allItemsCopy.push(state.userInput);
    return {
      ...state,
      lists: {
        ...state.lists,
        allItems: allItemsCopy
      }

    }

    case types.UPDATE_USER_INPUT_CATEGORY:
    return {
      ...state,
      userInput: {
        ...state.userInput,
        category: action.userInput.category
      }
    }

    // case types.USER_CATEGORY_SELECTED:
    // return {
    //   ...state,
    //   lists:
    // }

    default:
    return state;
  };
};
