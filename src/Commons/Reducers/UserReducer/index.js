import ResponseStatus from '../../ResponseStatus'

export default function reducer(state = {
  response: ResponseStatus.loading(),
}, action) {
  switch (action.type) {
    case 'FETCH_USERS_PENDING':
      return {...state, response: ResponseStatus.loading()}
    case 'FETCH_USERS_FULFILLED':
      if (action.payload.data === undefined || action.payload.data.length === 0) {
        return {...state, response: ResponseStatus.empty()}
      }
      return {...state, response: ResponseStatus.success(action.payload.data)}
    case 'FETCH_USERS_REJECTED':
      return {...state, response: ResponseStatus.error(action.payload.message)}
    default:
      return state
  }
}
