import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserActions from './actions/userActions';

import UserList from './components/userList';

// don't export the connected component using export default here
class App extends Component {

  // react lifecycle: Executes before the component render
  componentWillMount() {
    const that = this;
    setTimeout(() => {
      that.props.dispatch(UserActions.fetchUsers());
    }, 3000);
  }

  // render method
  render() {
    return (
      <div className="container-fluid">
        <UserList response={this.props.response} />
      </div>
    );
  }
}

App.propTypes = {
  response: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
}

// create the connection with redux
// here we need to set everything we need to handle
// in the component scope as a property and export the connected component
export default connect(store => ({
    response: store.userState.response,
  }),
)(App);
