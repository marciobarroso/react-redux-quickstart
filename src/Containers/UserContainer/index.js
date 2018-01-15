import React from 'react'
import PropTypes from 'prop-types'

import ResponseStatus from '../../Commons/ResponseStatus'

import './styles.scss'

const fetchUsers = (users) => {
  const rows = users.map(user =>
    (
      <tr key={user.id}>
        <td key={user.id}>{user.firstname} { user.lastname }</td>
        <td key={user.email}>{ user.email }</td>
        <td key={user.phone}>{ user.phone }</td>
        <td key={user.company}>{ user.company }</td>
        <td key={user.address}>{ user.address }</td>
      </tr>
    )
  )

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
  )
}

const UserList = ({response}) => {
  switch (response.status) {
    case ResponseStatus.LOADING:
      return <div className='loader' />
    case ResponseStatus.ERROR:
      return <div>{ response.status.errorMessage }</div>
    case ResponseStatus.EMPTY:
      return <div>Data not found</div>
    case ResponseStatus.SUCCESS:
      return fetchUsers(response.data)
    default:
      return null
  }
}

UserList.propTypes = {
  response: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
}

export default UserList
