import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';

const initialState = {
  loading: false,
  users: [],
  error: null
};

// create reducers
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING":
      return {...state, loading: true};
    case "FETCH_USERS_FULFILLED":
      return {...state, loading: false, users: action.payload};
    case "FETCH_USERS_REJECTED":
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

// combine reducers
const reducers = combineReducers({
  user: userReducer
});

// middlewares
const middleware = applyMiddleware(promise(), thunk, logger);

// create store
const store = createStore(reducers, middleware);

// call a dispatch
store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://5948439a25d14d00119e7b44.mockapi.io/users")
});
