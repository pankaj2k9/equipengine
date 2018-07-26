import React from "react"
import { bindActionCreators } from "redux"
import { compose, lifecycle, pure, withHandlers, withState } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { toastr } from "react-redux-toastr"
import { withRouter } from "react-router-dom"

import { createUser, fetchUsers } from "../thunks"
import CreateUserModal from "../CreateUserModal"
import UserItemFormatter from "../UserItemFormatter"
import modal from "hoc/modal"
import SearchActionBar from "base_components/SearchActionBar"
import { selectors, types } from "../ducks"
import UserContent from "../UserContent"
import VerticalTabs from "base_components/VerticalTabs"

const AdminUsers = ({
  fetchUsers,
  users,
  userId,
  isFetchingUsers,
  isSavingUser,
  isOpen: isOpenCreateUserModal,
  onOpen: onOpenCreateUserModal,
  onClose: onCloseCreateUserModal,
  handleCreateUser,
  handleTabClick
}) => (
  <div>
    <VerticalTabs
      tabs={users}
      tabFormatter={tab => <UserItemFormatter user={tab} />}
      loading={isFetchingUsers}
      selectedTab={userId && users.find(user => user.id.toString() === userId)}
      actionBar={
        <SearchActionBar
          onCreate={onOpenCreateUserModal}
          onSearch={term => fetchUsers({ term })}
        />
      }
      content={<UserContent />}
      onTabClick={handleTabClick}
    />
    <CreateUserModal
      isOpen={isOpenCreateUserModal}
      isSubmitting={isSavingUser}
      onClose={onCloseCreateUserModal}
      onSubmit={handleCreateUser}
    />
  </div>
)

const mapState = () =>
  createStructuredSelector({
    users: selectors.selectUsers(),
    isFetchingUsers: selectors.selectIsFetchingUsers(),
    isSavingUser: selectors.selectIsSavingUser()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      createUser,
      fetchUsers
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  lifecycle({
    componentDidMount() {
      if (!this.props.users || this.props.users.length === 0) {
        this.props.fetchUsers({})
      }
    }
  }),
  withRouter,
  modal,
  withHandlers({
    handleTabClick: props => user =>
      props.history.push(`/secure/admin/users/${user.id}`)
  }),
  withHandlers({
    handleCreateUser: props => fields => {
      props.createUser(fields).then(action => {
        props.onClose()
        if (action.type === types.CREATE_USER_SUCCESS) {
          props.handleTabClick(action.payload.user)
          toastr.success(
            "Success",
            `New user "${fields.email}" is succesffully created`
          )
        } else {
          toastr.error("Error", `Failed to create user "${fields.email}"`)
        }
      })
    }
  }),
  withState("userId", null, props =>
    // retrieve user id from url if provided
    props.location.pathname.replace(props.match.url, "").replace("/", "")
  ),
  pure
)(AdminUsers)
