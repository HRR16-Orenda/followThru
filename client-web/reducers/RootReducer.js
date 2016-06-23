import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import lists from './Reducer.js';

/**
 *  Root Reducer that combines every Reducers
 *  About Reducer in Redux : http://redux.js.org/docs/basics/Reducers.html
 */
const rootReducer = combineReducers({
  // form: formReducer, // Reducer provided by 'redux-form' module
  routing,
  lists
});

export default rootReducer;
