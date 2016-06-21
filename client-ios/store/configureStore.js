// @flow
// import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

const middleware = [thunk];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(rootReducer);

export default store;
