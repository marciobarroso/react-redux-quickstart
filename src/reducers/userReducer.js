import {empty, loading, success, error} from '../common/responseStatus';

export default function reducer(state = {
  response: loading(),
}, action) {
  switch (action.type) {
    case 'FETCH_USERS_PENDING':
      return {...state, response: loading()};
    case 'FETCH_USERS_FULFILLED':
      if (action.payload.data === undefined || action.payload.data.length === 0) {
        return {...state, response: empty()};
      }
      return {...state, response: success(action.payload.data)};
    case 'FETCH_USERS_REJECTED':
      return {...state, response: error(action.payload.message)};
    default:
      return state;
  }
}
