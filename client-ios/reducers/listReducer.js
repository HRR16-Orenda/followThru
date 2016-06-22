import * as types from '../constants/ActionTypes';

/**
 *  Reducers related to Lists
 */
export default (state = {
  lists: [ {listTitle: "Movies"}, {listTitle: "Music"}, {listTitle: "Books"} ],   // State for all lists
  isLoading: true,
  dataSource: null // State for ListView in AllLists
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
      dataSource: action.dataSource,
      isLoading: action.isLoading
    }
    default:
    return state;
  };
};
