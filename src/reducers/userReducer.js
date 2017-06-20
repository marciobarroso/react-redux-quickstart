export default function reducer(
  state = {
    loading: false,
    users: [],
    error: null
  }, action ) {
  switch (action.type) {
    case "FETCH_USERS_PENDING":
      return {...state, loading: true};
    case "FETCH_USERS_FULFILLED":
      return {...state, loading: false, users: action.payload.data};
    case "FETCH_USERS_REJECTED":
      return {...state, loading: false, error: action.payload.message};
    default:
      return state;
  }
}
