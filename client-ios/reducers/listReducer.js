import * as types from '../constants/ActionTypes';

/**
 *  Reducers related to Lists
 */
export default (state = {
  // lists: [ {listTitle: "Movies"}, {listTitle: "Music"}, {listTitle: "Books"} ],   // State for all lists
  // listItems: [],
  // allListsIsLoading: true,
  // singleListIsLoading: true,
  // allListsDataSource: null,
  // singleListDataSource: null
  user: {
    username: 'back2future',
    email: 'marty@mcfly.com',
    user_id: 1
  },
  ui: {
//there will only be "isLoading" in final store, not a version for "allLists" and "singleLists"
    allListsIsLoading: true,
    singleListIsLoading: true
  },
  lists: {
    category: [
      'book', 'music', 'movies'
    ],
    allItems: [
      {
        title: 'Where the red fern grows',
        category: 'books',
        content: 'Wilson Rawls'
      },
      {
        title: 'Say Anything',
        category: 'movies',
        content: '1989'
      },
      {
        title: 'Blame it on the Rain',
        category: 'movies',
        content: 'Milli Vanilli'
      }
    ]
  },
  filter: 'music',
  selectedItems: [
    {
      title: 'Blame it on the Rain',
      category: 'movies',
      content: 'Milli Vanilli'
    }
  ],
//dataSource will not be in the final store
  dataSource: {
    allListsDataSource: [],
    singleListDataSource: []
  }
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
      dataSource: {
        allListsDataSource: action.allListsDataSource,
        singleListDataSource: []
      },
      ui: {
        allListsIsLoading: action.allListsIsLoading,
        singleListIsLoading: true
      }
    };

    case types.UPDATE_SINGLE_LIST_STATE:
    return {
      ...state,
      dataSource: {
        singleListDataSource: action.singleListDataSource,
        allListsIsLoading: []
      },
      ui: {
        singleListIsLoading: action.singleListIsLoading,
        allListsIsLoading: true
      }
    };

    default:
    return state;
  };
};
