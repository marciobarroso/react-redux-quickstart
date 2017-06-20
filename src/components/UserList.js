import React from 'react';
import PropTypes from 'prop-types';
import './userList.css';

const fetchUsers = (users) => {
  const rows = users.map( user =>
    <tr key={user.id}>
      <td key={user.firstname}>{ user.firstname }</td>
      <td key={user.email}>{ user.email }</td>
      <td key={user.phone}>{ user.phone }</td>
      <td key={user.company}>{ user.company }</td>
      <td key={user.address}>{ user.address }</td>
    </tr>
  );

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>E-mail</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
      { rows }
      </tbody>
    </table>
  );
};

const UserList = (response) => {
  if (response.data.loading) {
    return <div className="user_list_loader"></div>;
  } else if (response.data.error) {
    return <div>{ response.data.error }</div>;
  } else if (response.data.users.length > 0) {
    return fetchUsers(response.data.users);
  }
  return null;
};

UserList.propTypes = {
  response: PropTypes.object
};

export default UserList;
