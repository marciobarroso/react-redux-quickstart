import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// import reducers/index.js
import reducers from '../reducers';

// combine middlewares
const middleware = applyMiddleware(
  promise(), thunk, // to do asynch calls
  logger, // log messages
);

// create store
const store = createStore(reducers, middleware);

// export
export default store;
