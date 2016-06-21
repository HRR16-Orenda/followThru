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



};
