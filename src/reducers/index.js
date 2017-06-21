import { combineReducers } from 'redux';

import userReducer from './userReducer';

// combine reducers
export default combineReducers({
  userState: userReducer,
});
