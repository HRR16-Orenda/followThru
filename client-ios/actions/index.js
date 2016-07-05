// @flow
import React from 'react'
import * as types from '../constants/ActionTypes';
import helper from '../services/helper';
import { reset } from 'redux-form';
import _ from 'lodash';
import {
  AsyncStorage,
  AlertIOS
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// ******* ADD ITEM SECTION ******

export const mainButtonPressed = (buttonCategory) => {
  return (dispatch, getState) => {
    let userInput = getState().lists.userInput;
    let user = getState().auth.user;
    if (userInput) {
      let newItem = {
        user_id: user.id,
        title: userInput,
        category: buttonCategory
      }
      dispatch(updateFilter(buttonCategory));
      dispatch(addItemLocally(newItem));
      dispatch(addItemToDatabase(newItem));
      dispatch(clearInputAfterSubmit());
      dispatch(changeTextToAdded(buttonCategory));
    }
    else {
      dispatch(updateFilter(buttonCategory));

      // Set title of the list screen according to selected category
      Actions.singleListScreen({title: buttonCategory});
    }
  }
}
export const changeTextToAdded = (buttonCategory) => {
  return (dispatch) => {
    dispatch(toggleCheck());

    _.delay(() => {
      dispatch(toggleCheck())
    }, 1000);
  }
}

export const toggleCheck = () => {
  return {
    type: types.TOGGLE_CHECK
  }
}

// REFACTORED version
export const addItemToDatabase = (item) => {
  return (dispatch, getState) => {
    dispatch(addNewListItemDatabaseRequest());
    let user = getState().auth.user;
    let newInput = {
      title: item.title,
      category: item.category,
      url: null,
      user_id: user.id
    };
    AsyncStorage.getItem('JWT_TOKEN', function(err, userToken){
      if(err) {
        console.log("error accessing JWT_TOKEN in local storage: ", err);
      } else {
        fetch('https://orenda-smartlist.herokuapp.com/api/items/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(userToken).jwt
          },
          body: JSON.stringify(newInput)
        }).then((response) => {
          console.log("response from add item: ", response)
          if(response.status === 401) {
            dispatch(deauthorizeUser())
            Actions.loginScreen();
            throw new Error('Unauthorized User');
          } else {
            // return response.json();
            return response.json();
          }
        }).then((data) => {
          console.log('tata', data);
          // update current allItems list with returned data from server
          var allItemsCopy = getState().lists.lists.allItems.slice().map(item => {
            if(item.title === data.title && item.category === data.category) {
              item = data
            };
            return item;
          });
          dispatch(addNewListItemDatabaseSuccess(allItemsCopy));
        }).catch((error) => {
          console.log(error);
          dispatch(addNewListItemDatabaseFailure());
        })
      }
    })
  }
}

const addItemLocally = (data) => {
  return {
    type: types.ADD_ITEM_LOCALLY,
    payload: data
  }
};

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

export const addNewListItemDatabaseSuccess = (data) => {
  return {
    type: types.ADD_NEW_LIST_ITEM_DATABASE_SUCCESS,
    payload: data
  }
}
//REMOVE?
export const toggleShow = () => {
  return {
    type: types.TOGGLE_SHOW
  }
}

export const resetDisplay = () => {
  return {
    type: types.RESET_UI_DISPLAY
  }
}

export const clearInputAfterSubmit = () => {
  return {
    type: types.CLEAR_INPUT_AFTER_SUBMIT
  }
}

// ******* EDIT ITEMS SECTION ******

// listItemEdited
// This should update the list item in the user's list (can be done from the actionConfirmation page or on the singleListScreen)

export const toggleCheckOnListItem = (item) => {
  return function(dispatch, getState) {
    let stateData = getState().lists.lists.allItems;
    let updatedList = findAndToggleCheck(item, stateData)
    dispatch(fetchUserLists(updatedList))
  }
}

const findAndToggleCheck = (itemToToggle, array) => {
  var itemToToggleIndex = array.map(function(item) {
    return item.id
  }).indexOf(itemToToggle.id);

  itemToToggle.crossedOff = !itemToToggle.crossedOff
  array[itemToToggleIndex] = itemToToggle
  return array;
}

export const deleteListItem = (item) => {
  return function(dispatch) {
    dispatch(deleteListItemLocal(item));
    dispatch(deleteListItemDatabase(item));
  }
}

const deleteListItemLocal = (item) => {
  return function(dispatch, getState) {
    let stateData = getState().lists.lists.allItems;
    let updatedList = findAndRemoveItem(item, stateData);
    dispatch(fetchUserLists(updatedList))
  }
}

const findAndRemoveItem = (itemToDelete, array) => {
  var itemToDeleteIndex = array.map(function(item) {
    return item.id
  }).indexOf(itemToDelete.id);

  // in case the item is not found
  if (itemToDeleteIndex === -1) {
    return array;
  }

  array.splice(itemToDeleteIndex, 1);
  return array;
}

const deleteListItemDatabase = (item) => {
  return function(dispatch, getState) {
    dispatch(deleteListItemDatabaseRequest());
    AsyncStorage.getItem('JWT_TOKEN', function(err, userToken){
      if(err) {
        console.log("error accessing JWT_TOKEN in local storage: ", err);
      } else {
        fetch('https://orenda-smartlist.herokuapp.com/api/items/' + item.id, {
          method: 'DELETE',
          headers: {
            'Authorization': JSON.parse(userToken).jwt
          },
        }).then((response) => {
          if(response.status === 401) {
            dispatch(deauthorizeUser())
            Actions.loginScreen();
            throw new Error('Unauthorized User');
          } else {
            // return response.json();
            return response.json();
          }
        })
        .then((data) => {
          dispatch(deleteListItemDatabaseSuccess());
        })
        .catch((error) => {
          console.log('Deletion error');
          dispatch(deleteListItemDatabaseFailure());
        })
      }
    })
  }
}

export const deleteListItemDatabaseRequest = () => {
  return {
    type: types.DELETE_LIST_ITEM_DATABASE_REQUEST
  }
}

export const deleteListItemDatabaseFailure = () => {
  return {
    type: types.DELETE_LIST_ITEM_DATABASE_FAILURE
  }
}

export const deleteListItemDatabaseSuccess = () => {
  return {
    type: types.DELETE_LIST_ITEM_DATABASE_SUCCESS
  }
}

export const toggleItem = (item) => {
  return (dispatch) => {
    var updatedItem = _.assign({}, item);
    updatedItem.completed = !updatedItem.completed;
    dispatch(toggleItemRequest());
    AsyncStorage.getItem('JWT_TOKEN', function(err, userToken){
      if(err) {
        console.log("error accessing JWT_TOKEN in local storage: ", err);
      } else {
        fetch('https://orenda-smartlist.herokuapp.com/api/items/' + updatedItem.id, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(userToken).jwt
        },
        body: JSON.stringify(updatedItem)
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch(toggleItemSuccess(updatedItem.id));
        })
        .catch((error) => {
          console.log("error from item toggle: ", error);
          dispatch(toggleItemFailure());
        })
      }
    })
  }
};

const toggleItemRequest = () => {
  return {
    type: types.TOGGLE_ITEM_REQUEST
  }
};

const toggleItemSuccess = (id) => {
  return {
    type: types.TOGGLE_ITEM_SUCCESS,
    payload: id
  }
};

const toggleItemFailure = () => {
  return {
    type: types.TOGGLE_ITEM_FAILURE
  }
};


// ******* FETCH ITEMS SECTION ******

const fetchInitialDatabase = () => {
  return function(dispatch, getState) {
    dispatch(fetchDatabaseListsRequest());
    var id = getState().auth.user.id;
    AsyncStorage.getItem('JWT_TOKEN', function(err, userToken){
      if(err){
        console.log("error accessing JWT_TOKEN in local storage: ", err);
        dispatch(fetchDatabaseListsFailure());
      } else {
        fetch('https://orenda-smartlist.herokuapp.com/api/items/', {
          method: 'GET',
          headers: {
            // send user id as header
            'User': id.toString(),
            'Authorization': JSON.parse(userToken).jwt
          },
        })
        .then((response) => {
          if(response.status !== 200){
            if(response.status === 401) {
              dispatch(deauthorizeUser())
              Actions.loginScreen();
            } throw error;
          } else {
            return response.json();
          }
        })
        .then((responseData) => {
          dispatch(fetchDatabaseListsSuccess(responseData))
        })
        .catch((error) => {
          dispatch(fetchDatabaseListsFailure())
        })
      }
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
  return {
    type: types.FETCH_DATABASE_LISTS_SUCCESS,
    payload: responseData
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
//REMOVE?
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

    // filter would come from the button that is clicked
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


// ******* LOGIN/SIGNUP/LOGOUT SECTION ******
export const loginUser = function(creds) {
  return function (dispatch, getState){
    dispatch(resetDisplay());
    dispatch(requestLogin());
    let creds = getState().form.auth;
    let loginCreds = {
      username: creds.username.value,
      password: creds.password.value
    }
    return fetch('https://orenda-smartlist.herokuapp.com/api/users/login/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginCreds)
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('this is returned data from server', data);
      var jwtObj = {
        jwt: data.jwt
      }
      storeLocally('JWT_TOKEN', data, function(err, result){
        if(err){
          console.log("Error with storing JWT to AsyncStorage: ", err);
        } else {
          Actions.addScreen();
          dispatch(loginSuccess(data))
          dispatch(fetchInitialDatabase());
        };
      });
    })
    .catch((error) => {
      console.log("error from user fetch call: ", error);
      dispatch(loginError("Wrong username or password"))
    })
  }
}

const requestLogin = function(creds) {
  return {
    type: types.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

const loginSuccess = function(user) {
  return {
    type: types.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    loginError: false,
    user: user
  }
}

const loginError = function(message) {
  return {
    type: types.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    loginError: true,
    message: message
  }
}

// makeSignupRequest
export const signupUser = function(creds) {
  return function (dispatch, getState) {
    dispatch(resetDisplay());
    dispatch(requestSignup());
    let creds = getState().form.auth;
    let newUser = {
      "email": creds.email.value,
      "username": creds.username.value,
      "password": creds.password.value
    }
    return fetch('https://orenda-smartlist.herokuapp.com/api/users/signup/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser)
    })
    .then((response) => {
      console.log("RESPONSE FROM SIGNUP SERVER REQUEST!!", response)
      if(response.ok === false){
        dispatch(signupError("Username/email already taken"))
        throw new Error('Unauthorized User');
      }
      Actions.addScreen();
      return response.json();
    })
    .then((data) => {
      var jwtObj = {
        jwt: data.jwt
      }
      storeLocally('JWT_TOKEN', data, function(err, result){
        if(err){
          console.log("Error with storing JWT to AsyncStorage: ", err);
        } else {
          dispatch(signupSuccess(data))
          dispatch(fetchInitialDatabase());
          // AlertIOS.alert(data.username + ", thank you for joining!")
        };
      });
    })
    .catch((error) => {
      console.log("error from user fetch call: ", error);
      dispatch(signupError("Username/email already taken"))
    })
  }
}

const requestSignup = function( creds ) {
  return {
    type: types.SIGNUP_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

const signupSuccess = function( user ) {
  return {
    type: types.SIGNUP_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    signupError: false,
    user
  }
}

const signupError = function( message ) {
  return {
    type: types.SIGNUP_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    signupError: true,
    message: message
  }
}

// logOut
export const logoutUser = function() {
  return function ( dispatch ) {
    dispatch(requestLogout());
    removeLocally('JWT_TOKEN', function(){
        dispatch(logoutSuccess());
        Actions.loginScreen();
        // AlertIOS.alert("Come back soon!");
    })
  }
}

const requestLogout = function() {
  return {
    type: types.LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

const logoutSuccess = function() {
  return {
    type: types.LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

const storeLocally = function( key, object, callback ) {
  AsyncStorage.setItem(key, JSON.stringify(object), () => {
    AsyncStorage.getItem(key, (err, result) => {
      if(err){
        return callback(err);
      }
      callback(null, result);
    });
  });
}

const removeLocally = function( key, callback ){
  AsyncStorage.removeItem(key, () => {
    callback();
  })
}

export const verifyUserToken = () => {
  return (dispatch, getState) => {
    dispatch(authorizeRequest());
    AsyncStorage.getItem('JWT_TOKEN', function(err, tokenObj){
      if(err) {
        console.log("error accessing JWT_TOKEN in local storage: ", err);
        dispatch(authorizeFailure())
      } else {
        if(tokenObj){
          dispatch(authorizeSuccess(JSON.parse(tokenObj)));
          dispatch(fetchInitialDatabase())
        } else {
          dispatch(authorizeFailure())
        }
      }
    })
  }
}

export const authorizeRequest = () => {
  return {
    type: types.AUTHORIZE_REQUEST,
    isFetching: true
  }
}

export const authorizeSuccess = (user) => {
  return {
    type: types.AUTHORIZE_SUCCESS,
    isFetching: false,
    user: user
  }
}

export const authorizeFailure = () => {
  return {
    type: types.AUTHORIZE_FAILURE,
    isFetching: false
  }
}

// ******* AUTOCOMPLETE SECTION ******
export const queryWikipedia = (input) => {
  return function (dispatch) {
    let formattedSearchQuery = putInWikipediaFormat(input);
    fetch('https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=' + formattedSearchQuery + '&limit=5', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      dispatch(updateSearchSuggestionsSuccess(response[1]));
    })
    .catch((error) => {
      // dispatch(updateSearchSuggestionsFailure());
    })
  }
}

const putInWikipediaFormat = ( query ) => {
  let spiltString = query.split(' ');
  return spiltString.join('+');
}

export const updateSearchSuggestionsSuccess = (inputSuggestions) => {
  return {
    type: types.UPDATE_SEARCH_SUGGESTIONS_SUCCESS,
    suggestions: inputSuggestions
  }
}

export const clearSuggestion = () => {
  return {
    type: types.CLEAR_SUGGESTION
  }
}

export const updateInputWithSuggestion = (inputData) => {
  return function ( dispatch ) {
    // clears out the search suggestions
    dispatch(updateSearchSuggestionsSuccess([]));
    dispatch(updateUserInput(inputData));
  }
}

export const updateUserInput = (inputData) => {
  return {
    type: types.UPDATE_USER_INPUT,
    inputData: inputData
  }
}
