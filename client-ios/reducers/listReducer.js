import * as types from '../constants/ActionTypes';
import { update } from "react";

/**
 *  Reducers related to Lists
 */
export default (state = {
  ui: {
    isLoading: true,
    loginError: false,
    loginErrorMsg: 'Wrong username or password',
    signupError: false,
    signupErrorMsg: 'Username already taken'
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
  modal: {
    isOpen: false,
    item: {}
  },
  toggleShow: true,
  suggestions: [],
  userInput: ''
}, action) => {
  switch (action.type) {

    case types.UPDATE_USER_INPUT:
    return {
      ...state,
      userInput: action.inputData
    }

    case types.UPDATE_INPUT_WITH_SUGGESTION:
    return {
      ...state,
      userInput: action.inputData
    }
    case types.UPDATE_SEARCH_SUGGESTIONS_SUCCESS:
    return {
      ...state,
      suggestions: action.suggestions
    }

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
      // uncomment when integration with main screen is completed
      // selectedItems: action.selectedItems

      // ui: {
      //   isLoading: action.singleListIsLoading,
      // }
    };

    case types.ADD_NEW_LIST_ITEM:
    var allItemsCopy = state.lists.allItems.slice();
    allItemsCopy.push(action.payload);
    return {
      ...state,
      lists: {
        allItems: allItemsCopy
      }
    }

    // REFACTORED version
    case types.ADD_ITEM_SUCCESS:
    var allItemsCopy = state.lists.allItems.slice();
    allItemsCopy.push(action.payload);
    return {
      ...state,
      toggleShow: false,
      lists: {
        category: determineLists(allItemsCopy),
        allItems: allItemsCopy
      }
    }

    case types.MODAL_OPEN:
    return {
      ...state,
      modal: {
        isOpen: true,
        item: action.payload
      }
    }

    case types.MODAL_CLOSE:
    return {
      ...state,
      modal: {
        isOpen: false,
        item: {}
      }
    }

    // Reducer for resetting toggleShow
    case 'jump':
    return {
      ...state,
      toggleShow: true
    }

    case types.SIGNUP_SUCCESS:
    return {
      ...state,
      ui: {
        ...state.ui,
        signupError: action.signupError,
      }
    }

    case types.SIGNUP_FAILURE:
    return {
      ...state,
      ui: {
        ...state.ui,
        signupError: action.signupError,
        signupErrorMsg: action.message
      }
    }

    case types.LOGIN_SUCCESS:
    return {
      ...state,
      ui: {
        ...state.ui,
        loginError: action.loginError,
      }
    }

    case types.LOGIN_FAILURE:
    return {
      ...state,
      ui: {
        ...state.ui,
        loginError: action.loginError,
        loginErrorMsg: action.message
      }
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
