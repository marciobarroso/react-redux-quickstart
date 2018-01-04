import { combineReducers } from 'redux'

import userReducer from './UserReducer/index'

// combine reducers
export default combineReducers({
  userState: userReducer,
})
