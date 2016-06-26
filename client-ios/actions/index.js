import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import { reset } from 'redux-form';
import {
  AsyncStorage
} from 'react-native';

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
  return function ( dispatch, getState ) {
    let data = getState().lists.lists.allItems
    dispatch( updateListsState( determineLists( data ) ) )
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
    // isLoading: false
  }
};



// ******* LOGIN SECTION ******
export const loginUser = function( creds ) {
  // async _onValueChange(item, selectedValue) {
  //   try {
  //     await AsyncStorage.setItem(item, selectedValue);
  //   } catch (error) {
  //     console.log('AsyncStorage error: ' + error.message);
  //   }
  // }



//   let config = {
//     method: 'POST',
//     headers: { 'Content-Type':'application/x-www-form-urlencoded' },
//     body: `username=${creds.username}&password=${creds.password}`
//   }
//
//   return dispatch => {
//     dispatch(requestLogin( creds ))
// //need to create this API endpoint in the server.  Also, is this
// //how you make a REST call on a native device? refer to the Auth0
// //example for reference
//     return fetch('http://localhost:3001/api/auth', config)
//       .then(response =>
//         response.json()
//         .then( user => ({ user, response })))
//         .then(({ user, response }) => {
//           if (!response.ok) {
//             dispatch(loginError(user.message))
//             return Promise.reject(user)
//           } else {
// need to store this in AsyncStorage unlike the browser example:
//           // localStorage.setItem('id_token', user.id_token)
// /* Note: it's important to note that we don't add it in the reducer becuase
// reducers should have no side effects.*/
//             dispatch(receiveLogin(user))
//           }
//         }).catch(err => console.log("Error: ", err))
//   }

}

const requestLogin = function( creds ) {
  return {
    type: types.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

const receiveLogin = function( user ) {
  return {
    type: types.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

const loginError = function( message ) {
  return {
    type: types.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

// makeSignupRequest ----> This will be similar to the above login flow;

// signupSuccess

// signupFailure

// logOut

export const logoutUser = function() {
  return function ( dispatch ) {
    dispatch(requestLogout()),
//need to remove this from  AsyncStorage, similar to the browser example:
    // localStorage.removeItem('id_token'),
    dispatch(receiveLogout())
  }
}

const requestLogout = function() {
  return {
    type: types.LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

const receiveLogout = function() {
  return {
    type: types.LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

// verifyUser

// verifySuccess

// verifyFailure
