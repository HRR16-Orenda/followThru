import * as types from '../constants/ActionTypes';
import _ from 'lodash';

/**
 *  Reducer related to Products
 */
export default (state = {
  users: [],
  items: []
}, action) => {
  switch (action.type) {
    case types.FETCH_USER_SUCCESS:
    return {
      ...state,
      users: action.payload
    }
    case types.FETCH_ITEM_SUCCESS:
    return {
      ...state,
      items: action.payload
    }
    case types.REMOVE_ITEM_SUCCESS:
    return {
      ...state,
      items: _.filter(state.items, item => item.id.toString() !== action.payload)
    }
    case types.REMOVE_USER_SUCCESS:
    return {
      ...state,
      users: _.filter(state.users, item => item.id.toString() !== action.payload)
    }
    case types.ADD_USER_SUCCESS:
    let newUserList = state.users.slice();
    newUserList.push(action.payload);
    return {
      ...state,
      users: newUserList
    }
    case types.ADD_ITEM_LOCALLY:
    let newItemList = state.items.slice();
    newItemList.push(action.payload);
    return {
      ...state,
      items: newItemList
    }
    default:
    return state;
  }
};
