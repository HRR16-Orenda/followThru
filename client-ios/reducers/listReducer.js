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
  },
  toggleShow: true
}, action) => {
  switch (action.type) {

    case types.TOGGLE_SHOW:
    return {
      ...state,
        toggleShow: !state.toggleShow
    }

    case types.FETCH_DATABASE_LISTS_SUCCESS:
    return {
      ...state,
      lists: {
        category: determineLists(action.payload),
        allItems: action.payload
      }
    };

    case types.UPDATE_LISTS_CATEGORY:
    return {
      ...state,
      lists: {
        ...state.lists,
        category: action.category
      }
    };

    case types.UPDATE_ALL_LISTS_STATE:
    return {
      ...state,
      lists: {
        ...state.lists,
        allItems:action.allLists
      }
    }

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

    // updateAllListsState

    case types.UPDATE_USER_INPUT_CATEGORY:
    return {
      ...state,
      userInput: {
        ...state.userInput,
        category: action.userInput.category
      }
    }

    case 'jump':
    return {
      ...state,
      toggleShow: true
    }

    default:
    return state;
  };
};

// helper function to find all the different categories
const determineLists = ( allItems ) => {
  let listsObj = {};
  let listsArr = [];
  allItems.map(( item ) => {
    listsObj[ item.category ] = true;
  })
  for( var key in listsObj ){
    listsArr.push( key );
  }
  return listsArr;
};
