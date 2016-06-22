import * as types from '../constants/ActionTypes';

/**
 *  Reducers related to Lists
 */
export default (state = {
  lists: [ {listTitle: "Movies"}, {listTitle: "Music"}, {listTitle: "Books"} ],   // State for all lists
  listItems: [],
  allListsIsLoading: true,
  singleListIsLoading: true,
  allListsDataSource: null, 
  singleListDataSource: null
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
      allListsDataSource: action.allListsDataSource,
      allListsIsLoading: action.allListsIsLoading
    };

    case types.UPDATE_SINGLE_LIST_STATE:
    return {
      ...state,
      singleListDataSource: action.singleListDataSource,
      singleListIsLoading: action.singleListIsLoading
    };

    default:
    return state;
  };
};
