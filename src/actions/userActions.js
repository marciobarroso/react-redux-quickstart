import axios from 'axios';

// fetch a list of users from a remote service
export function fetchUsers() {
  return {
    type: "FETCH_USERS",
    payload: axios.get("http://5948439a25d14d00119e7b44.mockapi.io/users")
  };
}
