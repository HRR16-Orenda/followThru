import createLogger from 'redux-logger'
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { routerMiddleware, push } from 'react-router-redux';
import rootReducer from '../reducers/rootReducer.js';
import { createStore, applyMiddleware, compose } from 'redux';

const router = routerMiddleware(browserHistory);
const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, router, loggerMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
};
