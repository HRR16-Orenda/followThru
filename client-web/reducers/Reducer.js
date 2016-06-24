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
    default:
    return state;
  }
};
