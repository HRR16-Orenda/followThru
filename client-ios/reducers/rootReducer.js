import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listReducer from './listReducer.js';
import authReducer from './authReducer.js';
/**
 *  Root Reducer that combines every Reducers
 *  About Reducer in Redux : http://redux.js.org/docs/basics/Reducers.html
 */
const rootReducer = combineReducers({
  // form: formReducer, 
  lists: listReducer,
  auth: authReducer
});

export default rootReducer;
