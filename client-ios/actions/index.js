import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import { reset } from 'redux-form';


let tempData = [
  {
    title: 'Where the Red Fern Grows',
    category: 'Books',
    content: 'Wilson Rawls'
  },
  {
    title: 'Say Anything',
    category: 'Movies',
    content: '1989'
  },
  {
    title: 'Blame it on the Rain',
    category: 'Music',
    content: 'Milli Vanilli'
  }
];

let tempFilter = "Music";


// addNewListItem
// This should add a new item to a specific list

// addListItemRequest
export const addListItemRequest = () => {
  return {
    type: types.ADDLISTITEM_REQUEST
  }
}

// addListItemSuccess
// This should trigger the actionConfirmation page to show up and display what list the item was added to

// addListItemFailure


export const userTypeStart = (text) => {
  return {
    type: types.USER_TYPE_START,
    userInput: {
      title: text
    }
  }
}


export const userCategorySelected = (category) => {
  return function(dispatch) {
    dispatch(updateUserInputCategory(category))
    dispatch(addNewListItem())
  }
}

export const updateUserInputCategory = (category) => {
  return {
    type: types.UPDATE_USER_INPUT_CATEGORY,
    userInput: {
      category: category
    }
  }
}

export const addNewListItem = () => {
  return {
    type: types.ADD_NEW_LIST_ITEM
  }
}

// listItemEdited
// This should update the list item in the user's list (can be done from the actionConfirmation page or on the singleListScreen)

// deleteListItem
// This should remove an item from a specific list

// fetchUserLists
// This should get a user's lists (Movies, Books, Meals to Cook) just the names of them will be displayed in the allListsScreen
export const fetchUserLists = () => {
  return function ( dispatch ) {

    dispatch( updateListsState( determineLists( tempData ) ) )
    // const url = '/products/' + id;
    // helper.getHelper(url)
    // .then(resp => {
    //   var updatedState = resp.data;
    //   if (resp.status == 200) {
    //     Array.isArray(updatedState) ? dispatch(updateProductsState(updatedState)) : dispatch(updateProductDetail(updatedState));
    //   }
    // })
    // .catch(err => {
    //   console.error(err);
    // });
  };
};

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

const updateListsState = ( updatedState ) => {
  return {
    type: types.UPDATE_LISTS_STATE,
    id: "category",
    category: updatedState
    // isLoading: false
  }
}

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

// fetchUserSingleList
// This should get all of the items inside of a user's specific list (Movies for example) and bring back with it
export const fetchUserSingleList = ( listName, category ) => {
  return function ( dispatch, getState ) {
    let filter = getState().lists.filter;
    let updatedSelectedItems = filterAllItems( tempData, filter );
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
    // isLoading: false
  }
};



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
