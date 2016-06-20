// @flow
// import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// const router = routerMiddleware(browserHistory);
// const loggerMiddleware = createLogger();


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const reducer = combineReducers(reducers);

const store = createStoreWithMiddleware(rootReducer);
export default store;
//
// export default function configureStore() {
//   return createStore(
//     rootReducer,
//     compose(
//       applyMiddleware(thunk)
//     )
//   )
// };
