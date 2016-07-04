import * as types from '../constants/ActionTypes';
import { update } from "react";

/**
 *  Reducers related to Lists
 */
export default (state = {
  ui: {
    isLoading: false,
    loginError: false,
    loginErrorMsg: '',
    signupError: false,
    signupErrorMsg: '',
    deleteConfirm: false,
    date: new Date()
  },
  lists: {
    category: ['default'],
    allItems: []
  },
  filter: '',
  selectedItems: [],
  modal: {
    isOpen: false,
    item: {}
  },
  suggestions: [],
  userInput: '',
  checked: false
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

    case types.CLEAR_SUGGESTION:
    return {
      ...state,
      suggestions: []
    }

    case types.CLEAR_INPUT_AFTER_SUBMIT:
    return {
      ...state,
      userInput: '',
      suggestions: []
    }

    case types.TOGGLE_CHECK:
    return {
      ...state,
      checked: !state.checked
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
      selectedItems: action.selectedItems
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
    case types.ADD_ITEM_LOCALLY:
    var allItemsCopy = state.lists.allItems.slice();
    allItemsCopy.push(action.payload);
    return {
      ...state,
      lists: {
        allItems: allItemsCopy
      }
    }

    case types.ADD_NEW_LIST_ITEM_DATABASE_SUCCESS:
    return {
      ...state,
      lists: {
        allItems: action.payload
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

    case types.DATE_CHANGE:
    return {
      ...state,
      ui: {
        ...state.ui,
        date: action.payload
      }
    }

    case types.MODAL_CLOSE:
    return {
      ...state,
      ui: {
        ...state.ui,
        deleteConfirm: false
      },
      modal: {
        isOpen: false,
        item: {}
      }
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

    case types.RESET_UI_DISPLAY:
    return {
      ...state,
      ui: {
        ...state.ui,
        isLoading: false,
        loginError: false,
        signupError: false,
      }
    }

    case types.TOGGLE_ITEM_REQUEST:
    return {
      ...state,
      ui: {
        ...state.ui,
        isLoading: true
      }
    }

    case types.TOGGLE_ITEM_SUCCESS:
    var oldItems = state.lists.allItems.slice();
    var updatedItems = oldItems.map(item => {
      if(item.id === action.payload) {
        item.completed = !item.completed;
      }
      return item;
    });
    return {
      ...state,
      lists: {
        category: state.lists.category,
        allItems: updatedItems
      },
      ui: {
        ...state.ui,
        isLoading: false
      }
    }

    case types.TOGGLE_ITEM_FAILURE:
    return {
      ...state,
      ui: {
        ...state.ui,
        isLoading: false
      }
    }

    case types.DELETE_CONFIRM_ON:
    return {
      ...state,
      ui: {
        ...state.ui,
        deleteConfirm: true
      }
    }

    case types.DELETE_CONFIRM_OFF:
    return {
      ...state,
      ui: {
        ...state.ui,
        deleteConfirm: false
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
