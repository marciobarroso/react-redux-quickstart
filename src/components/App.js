import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as userActions from '../actions/userActions';

import UserList from './UserList';

// create the connection with redux
// here we need to set everything we need to handle
// in the component scope as a property
@connect((store) => {
    return {
      response: {
        users: store.user.users,
        loading: store.user.loading,
        error: store.user.error
      }
    }
  }
)
export default class App extends Component {

  // react lifecycle: Executes before the component render
  componentWillMount() {
    this.props.dispatch(userActions.fetchUsers());
  }

  // render method
  render() {
    return (
      <UserList
        data={ this.props.response }
      />
    );
  }
}
