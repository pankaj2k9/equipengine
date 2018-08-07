import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { compose, pure } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import { fetchGroupUsers } from "../thunks"
import { selectors } from "../ducks"

import Loading from "base_components/Loading"
import UserList, { UserListItem } from "./../UserListItem"

class TabUser extends Component {
  componentDidMount() {
    const { role, searchTerm } = this.props
    this.props.fetchGroupUsers({
      groupId: this.props.match.params.groupId,
      role: role,
      term: searchTerm
    })
  }

  render() {
    const { users, isFetchingUsers } = this.props
    if (isFetchingUsers) {
      return <Loading />
    }
    return (
      <UserList>
        {Array.isArray(users) && users.length !== 0 ? (
          users.map((user, index) => <UserListItem user={user} key={index} />)
        ) : (
          <li>No users found</li>
        )}
      </UserList>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    users: selectors.selectGroupUsers(),
    isFetchingUsers: selectors.selectIsFetchingGroupUsers(),
    searchTerm: selectors.selectSearchTerm()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchGroupUsers
    },
    dispatch
  )

export default compose(
  withRouter,
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  pure
)(TabUser)
