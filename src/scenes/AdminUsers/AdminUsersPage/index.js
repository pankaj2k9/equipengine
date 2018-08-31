import React, { Component, Fragment } from "react"
import { bindActionCreators } from "redux"
import { compose, pure, withState } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { toastr } from "react-redux-toastr"
import { withRouter } from "react-router-dom"

import BorderedTitle from "base_components/BorderedTitle"
import { createUser, fetchUsers, sendResetPasswordToken } from "../thunks"
import CreateUserModal from "../CreateUserModal"
import UserItemFormatter from "../UserItemFormatter"
import modal from "hoc/modal"
import SearchActionBar from "base_components/SearchActionBar"
import { actions, selectors, types } from "../ducks"
import UserContent from "../UserContent"
import VerticalTabs from "base_components/VerticalTabs"

class AdminUsers extends Component {
  componentDidMount() {
    const { users, userId, fetchUsers, selectUser } = this.props
    if (!users || users.length === 0) {
      fetchUsers({})
    }
    if (userId) {
      selectUser({ userId })
    }
  }

  handleTabClick = user =>
    this.props.history.push(`/secure/admin/users/${user.id}`)

  handleCreateUser = fields => {
    this.props.createUser(fields).then(action => {
      this.props.onClose()
      if (action.type === types.CREATE_USER_SUCCESS) {
        this.handleTabClick(action.payload.user)
        toastr.success(
          "Success",
          `New user "${fields.email}" is succesffully created`
        )
      } else {
        toastr.error("Error", `Failed to create user "${fields.email}"`)
      }
    })
  }

  handleUpdateUser = user => {}

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
      users,
      userId,
      selectedUser,
      isFetchingUsers,
      isSavingUser,
      isOpen: isOpenCreateUserModal,
      onOpen: onOpenCreateUserModal,
      onClose: onCloseCreateUserModal
    } = this.props

    return (
      <Fragment>
        <BorderedTitle title="User Manager" />
        <VerticalTabs
          tabs={users}
          tabFormatter={tab => <UserItemFormatter user={tab} />}
          loading={isFetchingUsers}
          selectedTab={selectedUser && selectedUser.id}
          actionBar={
            <SearchActionBar
              onCreate={onOpenCreateUserModal}
              onSearch={this.handleSearchUsers}
            />
          }
          content={
            selectedUser &&
            selectedUser.id.toString() === userId && (
              <UserContent
                user={selectedUser}
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
    selectedUser: selectors.selectSelectedUser(),
    isFetchingUsers: selectors.selectIsFetchingUsers(),
    isSavingUser: selectors.selectIsSavingUser()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      createUser,
      fetchUsers,
      selectUser: actions.selectUser,
      sendResetPasswordToken
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
    // retrieve user id from url if provided
    props.location.pathname.replace(props.match.url, "").replace("/", "")
  ),
  pure
)(AdminUsers)
