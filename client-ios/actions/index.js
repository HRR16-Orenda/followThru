// @flow

import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import { reset } from 'redux-form';


// ******* ADD ITEM SECTION ******

export const userTypeStart = (text) => {
  return {
    type: types.USER_TYPE_START,
    userInput: {
      title: text
    }
  }
}

// when a user clicks on what category they want their list item to be added to
export const userCategorySelected = (category) => {
  return function(dispatch) {
    dispatch(updateUserInputCategory(category));
    dispatch(addNewListItem());
    dispatch(addNewListItemDatabase());
    dispatch(toggleShow())
  }
}

// updates the global state with the selected category
export const updateUserInputCategory = (category) => {
  return {
    type: types.UPDATE_USER_INPUT_CATEGORY,
    userInput: {
      category: category
    }
  }
}

// updates the global state allItems from the userInput
export const addNewListItem = () => {
  return {
    type: types.ADD_NEW_LIST_ITEM
  }
}

// adds the userInput to the database
export const addNewListItemDatabase = () => {
  return function(dispatch, getState) {
    dispatch(addNewListItemDatabaseRequest());

    let user = getState().lists.user;
    let userInput = getState().lists.userInput
    let newInput = {
      title: userInput.title,
      content: 'Add something here',
      category: userInput.category,
      subcategory: 'favorite',
      url: null,
      user_id: user.user_id
    }
    fetch('http://localhost:3000/api/items/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newInput)
    }).then((response) => {
      dispatch(addNewListItemDatabaseSuccess());
    })
    .catch((error) => {
      dispatch(addNewListItemDatabaseFailure());
    })
  }
}

export const addNewListItemDatabaseRequest = () => {
  return {
    type: types.ADD_NEW_LIST_ITEM_DATABASE_REQUEST
  }
}

export const addNewListItemDatabaseFailure = () => {
  return {
    type: types.ADD_NEW_LIST_ITEM_DATABASE_FAILURE
  }
}

export const addNewListItemDatabaseSuccess = () => {
  return {
    type: types.ADD_NEW_LIST_ITEM_DATABASE_SUCCESS
  }
}

export const toggleShow = () => {
  return {
    type: types.TOGGLE_SHOW
  }
}

export const toggle = () => {
  return function (dispatch) {
    dispatch(toggleShow());
  }
}
// ******* EDIT ITEMS SECTION ******

// listItemEdited
// This should update the list item in the user's list (can be done from the actionConfirmation page or on the singleListScreen)

// deleteListItem
// This should remove an item from a specific list

// ******* FETCH ITEMS SECTION ******

// This should only be called once when a user logs in
// Currently this is called whenever the add screen is chosen
// Which overwrites the allLists
export const fetchInitialDatabase = () => {
  return function(dispatch) {
    dispatch(fetchDatabaseListsRequest());

    fetch('http://localhost:3000/api/items/', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      dispatch(fetchDatabaseListsSuccess(responseData))
    })
    .catch((error) => {
      dispatch(fetchDatabaseListsFailure())
    })

  }
}

export const fetchDatabaseListsRequest = () => {
  return {
    type: types.FETCH_DATABASE_LISTS_REQUEST
  }
}

export const fetchDatabaseListsFailure = () => {
  return {
    type: types.FETCH_DATABASE_LISTS_FAILURE
  }
}

export const fetchDatabaseListsSuccess = (responseData) => {
  return function (dispatch) {
    dispatch(fetchUserLists(responseData))
  }
}

// This should get a user's lists (Movies, Books, Meals to Cook) just the names of them will be displayed in the allListsScreen
export const fetchUserLists = (responseData) => {
  return function ( dispatch, getState ) {
    let stateData = getState().lists.lists.allItems;
    let data = responseData || stateData;
    dispatch( updateListsCategory( determineLists( data ) ) )
    dispatch( updateAllListsState( data ) )
  };
};

const updateListsCategory = ( updatedState ) => {
  return {
    type: types.UPDATE_LISTS_CATEGORY,
    id: "category",
    category: updatedState
    // isLoading: false
  }
}

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

export const updateAllListsState = (updatedState) => {
  return {
    type: types.UPDATE_ALL_LISTS_STATE,
    allLists: updatedState
  }
}


// fetchUserSingleList
// This should get all of the items inside of a user's specific list (Movies for example) and bring back with it
export const fetchUserSingleList = ( listName, category ) => {
  return function ( dispatch, getState ) {
    let filter = getState().lists.filter;
    let data = getState().lists.lists.allItems

    let updatedSelectedItems = filterAllItems( data, filter );
    dispatch( updateSingleListState( updatedSelectedItems ) );
  };
};

const filterAllItems = ( allItems, filterCategory ) => {
  let condition = ( item ) => {
    return item.category === filterCategory;
  }
  return allItems.filter( condition );
}

const updateSingleListState = ( updatedState ) => {
  return {
    type: types.UPDATE_SINGLE_LIST_STATE,
    selectedItems: updatedState
  }
};

export const updateFilter = ( filterString ) => {
  return function ( dispatch ) {
    dispatch( updateFilterState( filterString ) )
  }
}

const updateFilterState = ( updatedState ) => {
  return {
    type: types.UPDATE_FILTER_STATE,
    filter: updatedState
  }
}

// ******* LOGIN SECTION ******
// We'll obviously need a login section and all of the actions that go with that

// makeLoginRequest

// loginSuccess

// loginFailure

// makeSignupRequest

// signupSuccess

// signupFailure

// logOut

// verifyUser

// verifySuccess

// verifyFailure
