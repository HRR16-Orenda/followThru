// @flow
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
import { createStore, applyMiddleware, compose } from 'redux';

// const router = routerMiddleware(browserHistory);
const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, loggerMiddleware)
      // window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
};
