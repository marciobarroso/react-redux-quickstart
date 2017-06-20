import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as userActions from '../actions/userActions';

// create the connection with redux
// here we need to set everything we need to handle
// in the component scope as a property
@connect((store) => {
    return {
      users: store.user.users,
      loading: store.user.loading,
      error: store.user.error
    };
  }
)
export default class App extends Component {

  // react lifecycle: Executes before the component render
  componentWillMount() {
    this.props.dispatch(userActions.fetchUsers());
  }

  // render method
  render() {

    if (this.props.loading) { // loading
      return <div>Loading ... </div>;
    } else if (this.props.error) { // error
      return <div>{ this.props.error }</div>;
    } else if (this.props.users.length > 0) { // rendering users informations
      return <div>Fetch Users </div>;
    } else {
      return null; // rendering nothing
    }

  }
}
