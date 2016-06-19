import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listReducer from './listReducer.js'
/**
 *  Root Reducer that combines every Reducers
 *  About Reducer in Redux : http://redux.js.org/docs/basics/Reducers.html
 */
const rootReducer = combineReducers({
  form: formReducer, // Reducer provided by 'redux-form' module
  listReducer
)};

export default rootReducer;
