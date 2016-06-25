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
  return function(dispatch, getState) {
    dispatch(updateUserInputCategory(category));
    dispatch(addNewListItem());

    let user = getState().lists.user;
    let userInput = getState().lists.userInput
    // console.log('********** the user ******** ', user)
    // console.log('********** the userInput ******** ', userInput)

    let newInput = {
      title: userInput.title,
      content: 'Add something here',
      category: userInput.category,
      subcategory: 'favorite',
      url: null,
      user_id: user.user_id
    }
    // console.log('********** the newInput ******** ', newInput)
    fetch('http://localhost:3000/api/items/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newInput)
    }).then((response) => {
      console.log('***************************** heres the response ', response);
    })
    .catch((error) => {
      console.log('there was a big error ????????????????????????????', error)
    })
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

// This should only be called once when a user logs in
// Currently this is called whenever the add screen is chosen
// Which overwrites the allLists
export const fetchInitialDatabase = () => {
  return function(dispatch) {
    fetch('http://localhost:3000/api/items/', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      dispatch( updateListsCategory( determineLists( responseData ) ) )
      dispatch( updateAllListsState( responseData ) )
    })
    .catch((error) => {
      console.log('there was an error', error)
    })

  }
}

// fetchUserLists
// This should get a user's lists (Movies, Books, Meals to Cook) just the names of them will be displayed in the allListsScreen
export const fetchUserLists = () => {
  return function ( dispatch, getState ) {
    let data = getState().lists.lists.allItems
    dispatch( updateListsCategory( determineLists( data ) ) )
      dispatch( updateAllListsState( data ) )
    // console.log('let me see that data ', data);
//localhost:8081
    // fetch('http://localhost:3000/api/items/', {
    //   method: 'GET'
    // })
    // .then((response) => {
    //   return response.json();
    // })
    // .then((responseData) => {
    //   console.log("*************** ", responseData);
    //   dispatch( updateListsCategory( determineLists( responseData ) ) )
    //   dispatch( updateAllListsState( responseData ) )
    // })
    // .catch((error) => {
    //   console.log('there was a big error ????????????????????????????', error)
    // })


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

// Update this to just say category
const updateListsCategory = ( updatedState ) => {
  return {
    type: types.UPDATE_LISTS_CATEGORY,
    id: "category",
    category: updatedState
    // isLoading: false
  }
}

export const updateAllListsState = (updatedState) => {
  return {
    type: types.UPDATE_ALL_LISTS_STATE,
    allLists: updatedState
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
  // The filter is not currently being set
  return function ( dispatch, getState ) {
    let filter = getState().lists.filter;
    let data = getState().lists.lists.allItems

    console.log('single data ', data);
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
