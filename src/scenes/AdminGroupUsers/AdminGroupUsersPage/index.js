import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { compose, withState } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import features from "features"
import { selectors } from "../selectors"
import { addUsersToGroup, fetchGroupUsers } from "../thunks"
import Loading from "base_components/Loading"
import GroupUsersTable from "../GroupUsersTable"
import GroupUsersActionBar from "../GroupUsersActionBar"

class AdminGroupUsersPage extends Component {
  componentDidMount() {
    // Fetch current group users
    const { groupId, groupUsers } = this.props
    if (
      groupId &&
      (!groupUsers ||
        groupUsers.length === 0 ||
        !Array.isArray(groupUsers[0].group_ids) ||
        !groupUsers[0].group_ids.includes(groupId))
    ) {
      this.props.fetchGroupUsers({ groupId })
    }

    // Fetch all users for autocomplete
    const { nonCurrentGroupUsers, searchTerm } = this.props
    if (
      !nonCurrentGroupUsers ||
      nonCurrentGroupUsers.length === 0 ||
      searchTerm
    ) {
      this.props.fetchUsers({})
    }
  }

  handleUserClick = user =>
    this.props.history.push(`/secure/admin/users/${user.id}`)

  handleSearchUser = term => this.props.fetchUsers({ term })
  handleAddUsersToGroup = (userIds, users) =>
    this.props.addUsersToGroup({
      users,
      groupId: this.props.groupId
    })

  render() {
    const {
      className,
      groupUsers,
      isFetchingGroupUsers,
      nonCurrentGroupUsers,
      isFetchingUsers,
      searchTerm,
      isAddingUserToGroup
    } = this.props

    return (
      <div className={className}>
        {isFetchingGroupUsers || isAddingUserToGroup ? (
          <Loading />
        ) : (
          <div>
            <GroupUsersActionBar
              isFetchingUsers={isFetchingUsers}
              users={nonCurrentGroupUsers}
              searchTerm={searchTerm}
              onAddUsers={this.handleAddUsersToGroup}
              onSearchUser={this.handleSearchUser}
            />
            <GroupUsersTable
              users={groupUsers}
              onUserClick={this.handleUserClick}
            />
          </div>
        )}
      </div>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    // action bar selectors
    nonCurrentGroupUsers: selectors.selectNonCurrentGroupUsers(),
    isFetchingUsers: features.adminUsers.selectors.selectIsFetchingUsers(),
    searchTerm: features.adminUsers.selectors.selectSearchTerm(),
    // table and action bar selectors
    groupUsers: selectors.selectGroupUsers(),
    isFetchingGroupUsers: selectors.selectIsFetchingGroupUsers(),
    isAddingUserToGroup: selectors.selectIsAddingUsersToGroup()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      addUsersToGroup,
      fetchGroupUsers,
      fetchUsers: features.adminUsers.actions.fetchUsers
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  withRouter,
  withState("groupId", null, ({ location, match }) =>
    // retrieve group id from url if provided
    location.pathname.replace(match.url, "").replace("/", "")
  )
)(AdminGroupUsersPage)
