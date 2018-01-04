import axios from 'axios'

export default class UserActions {

  // fetch a list of users from a remote service
  static fetchUsers() {
    return {
      type: 'FETCH_USERS',
      payload: new Promise(resolve =>
        setTimeout(
          () => resolve(axios.get('http://5948439a25d14d00119e7b44.mockapi.io/users')),
          3000
        )
      )
    }
  }
}
