import * as types from '../constants/ActionTypes';

/**
 *  Reducers related to Lists
 */
export default (state = {
  lists: [ {listTitle: "Movies"}, {listTitle: "Music"}, {listTitle: "Books"} ],   // State for all lists
  listItems: [],
  allListsIsLoading: true,
  singleListIsLoading: true,
  allListsDataSource: null, // State for ListView in AllLists
  singleListDataSource: null
}, action) => {
  switch (action.type) {

    case types.FETCH_USER_LISTS:
    return {
      ...state,
      lists: action.fetchUserLists
    };

    case types.UPDATE_LISTS_STATE:
    // console.log('here is the action ***********************************************', action);
    return {
      ...state,
      // lists: action.updatedListsState
      allListsDataSource: action.allListsDataSource,
      allListsIsLoading: action.allListsIsLoading
    };

    case types.UPDATE_LISTS_STATE:
    // console.log('here is the action ***********************************************', action);
    return {
      ...state,
      // lists: action.updatedListsState
      allListsDataSource: action.allListsDataSource,
      singleListIsLoading: action.singleListIsLoading
    };

    default:
    return state;
  };
};
