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
    case types.UPDATE_PRODUCTS_STATE:
    return {
      ...state,
      items: action.updatedProductsState
    }
    case types.UPDATE_PRODUCT_DETAIL:
    return {
      ...state,
      detail: {
        item: action.payload,

        // Extract Date information only
        disableDate: action.payload.rentSchedule.map(schedule => {
          return schedule.date;
        })
      }
    };
    case types.RENT_SUCCESS:
    return {
      ...state,
      detail: {
        item: action.payload,

        // Extract Date information only
        disableDate: action.payload.rentSchedule.map(schedule => {
          return schedule.date;
        })
      }
    };
    case types.CANCEL_SUCCESS:
    return {
      ...state,
      detail: {
        item: action.payload,

        // Extract Date information only
        disableDate: action.payload.rentSchedule.map(schedule => {
          return schedule.date;
        })
      }
    };
    case types.REMOVELISTING_SUCCESS:
    return {
      ...state,

      // Remove from items state
      items: state.items.filter((item) => {
        return item._id !== action.itemId;
      })
    }
    case types.ADDLISTING_SUCCESS:
    return {
      ...state,
      items: [
        ...state,
        action.newItem
      ]
    };
    case types.SEARCH:
    return {
      ...state,
      filter: action.payload
    };
    default:
    return state;
  }
};
