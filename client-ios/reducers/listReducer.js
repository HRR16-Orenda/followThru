import * as types from '../constants/ActionTypes';

/**
 *  Reducers related to Lists
 */
export default (state = {
  lists: [],        // State for all lists
  isLoading: '',
  allListsDataSource: [] // State for ListView in AllLists
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
      lists: [1,2,3, 'test']
    }
    default:
    return state;
  };
};
