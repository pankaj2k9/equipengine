import React, { Component, Fragment } from "react"
import { bindActionCreators } from "redux"
import { compose, pure, withState } from "recompose"
import debounce from "lodash.debounce"
import { connect } from "react-redux"
import { toastr } from "react-redux-toastr"
import { withRouter } from "react-router-dom"
import { createStructuredSelector } from "reselect"

import BorderedTitle from "base_components/BorderedTitle"
import VerticalTabs from "base_components/VerticalTabs"
import SearchActionBar from "base_components/SearchActionBar"

import UpdateUserForm from "../UpdateUserForm"
import CreateUserModal from "../CreateUserModal"
import UserItemFormatter from "../UserItemFormatter"

import { actions, selectors, types } from "../ducks"
import {
  createUser,
  fetchUsers,
  fetchMoreUsers,
  sendResetPasswordToken
} from "../thunks"

import modal from "hoc/modal"
import features from "features"

class AdminUsers extends Component {
  componentDidMount() {
    const {
      groups,
      users,
      userId,
      fetchGroups,
      fetchUsers,
      selectUser
    } = this.props
    if (users.length === 0) {
      fetchUsers({})
    }
    if (groups.length === 0) {
      fetchGroups({})
    }
    if (userId) {
      selectUser({ userId })
    }

    this.handleSearchUsers = debounce(this.handleSearchUsers, 500)
  }

  handleLoadMore = page => {
    const { fetchMoreUsers, searchTerm } = this.props

    fetchMoreUsers({
      current_page: page,
      term: searchTerm
    })
  }

  handleTabClick = user =>
    this.props.history.push(`/secure/admin/users/${user.id}`)

  handleCreateUser = fields => {
    this.props
      .createUser({
        ...fields,
        organizationId: this.props.organizationId
      })
      .then(action => {
        this.props.onClose()
        if (action.type === types.CREATE_USER_SUCCESS) {
          this.handleTabClick(action.payload.user)
          toastr.success(
            "Success",
            `New user "${fields.email}" is successfully created`
          )
        } else {
          toastr.error("Error", `Failed to create user "${fields.email}"`)
        }
      })
  }

  handleResetPasswordSend = ({ id, email }) =>
    this.props.sendResetPasswordToken({ id, email }).then(action => {
      if (action.type === types.SEND_RESET_PASSWORD_TOKEN_SUCCESS) {
        toastr.success(
          "Success",
          `Reset password token has been successfully sent to ${email}`
        )
      } else {
        toastr.error("Error", "Reset password token sending failed")
      }
    })

  handleSearchUsers = ({ term, role }) => {
    this.props.fetchUsers({ term, role })
  }

  render() {
    const {
      groups,
      users,
      userId,
      selectedUser,
      isFetchingUsers,
      isSavingUser,
      isOpen: isOpenCreateUserModal,
      onOpen: onOpenCreateUserModal,
      onClose: onCloseCreateUserModal,
      pagination
    } = this.props

    return (
      <Fragment>
        <BorderedTitle title="User Manager" />
        <VerticalTabs
          tabs={users}
          tabFormatter={tab => <UserItemFormatter user={tab} />}
          loading={isFetchingUsers}
          selectedTab={parseInt(userId, 10)}
          handleLoadMore={this.handleLoadMore}
          pagination={pagination}
          actionBar={
            <SearchActionBar
              onCreate={onOpenCreateUserModal}
              onSearch={this.handleSearchUsers}
              refine
            />
          }
          content={
            selectedUser &&
            selectedUser.id.toString() === userId && (
              <UpdateUserForm
                groups={groups}
                user={selectedUser}
                users={users}
                onSubmit={this.handleUpdateUser}
                onSendResetPasswordToken={this.handleResetPasswordSend}
              />
            )
          }
          onTabClick={this.handleTabClick}
        />
        <CreateUserModal
          isOpen={isOpenCreateUserModal}
          isSubmitting={isSavingUser}
          onClose={onCloseCreateUserModal}
          onSubmit={this.handleCreateUser}
        />
      </Fragment>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    users: selectors.selectUsers(),
    groups: features.adminGroups.selectors.selectGroups(),
    isFetchingUsers: selectors.selectIsFetchingUsers(),
    isSavingUser: selectors.selectIsSavingUser(),
    selectedUser: selectors.selectSelectedUser(),
    organizationId: features.login.selectors.selectCurrentUserOrganizationId(),
    pagination: selectors.selectPagination(),
    searchTerm: selectors.selectSearchTerm()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      createUser,
      fetchUsers,
      fetchMoreUsers,
      updateUser: features.adminUsers.actions.updateUser,
      selectUser: actions.selectUser,
      sendResetPasswordToken,
      fetchGroups: features.adminGroups.actions.fetchGroups
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
  modal,
  withState("userId", null, props =>
    props.location.pathname.replace(props.match.url, "").replace("/", "")
  ),
  pure
)(AdminUsers)
