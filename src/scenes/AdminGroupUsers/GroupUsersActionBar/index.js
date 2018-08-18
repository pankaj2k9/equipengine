import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { compose } from "recompose"
import { bindActionCreators } from "redux"
import { createStructuredSelector } from "reselect"

import ButtonAdd from "base_components/ButtonAdd"
import HeaderItemTab from "base_components/HeaderItemTab"
import Button from "base_components/RootButton"
import SelectItemModal from "base_components/SelectItemModal"
import UserInfoFormatter from "base_components/UserInfoFormatter"
import modal from "hoc/modal"

import { deleteGroupUser, updateGroupUserStatus } from "../thunks"
import { selectors } from "../selectors"

class GroupUsersActionBar extends Component {
  state = { groupId: null }

  componentDidMount() {
    const { location, match } = this.props

    if (location && location.pathname) {
      this.setState({
        groupId: location.pathname.replace(match.url, "").replace("/", "")
      })
    }
  }

  handleActivateGroupUsers = () => {
    const { updateGroupUserStatus, selectedGroupUsers } = this.props
    const { groupId } = this.state

    selectedGroupUsers.forEach(id =>
      updateGroupUserStatus({ groupId, id, status: "active" })
    )
  }

  handleDeactivateGroupUsers = () => {
    const { updateGroupUserStatus, selectedGroupUsers } = this.props
    const { groupId } = this.state

    selectedGroupUsers.forEach(id =>
      updateGroupUserStatus({ groupId, id, status: "pause" })
    )
  }

  handleDeleteGroupUsers = () => {
    const { deleteGroupUser, selectedGroupUsers } = this.props
    const { groupId } = this.state

    selectedGroupUsers.forEach(id => deleteGroupUser({ groupId, id }))
  }

  render() {
    const {
      isFetchingUsers,
      users,
      searchTerm,
      isOpen,
      onOpen,
      onClose,
      onAddUsers,
      onSearchUser,
      selectedGroupUsers
    } = this.props

    return (
      <Fragment>
        <HeaderItemTab>
          <ButtonAdd
            iconPosition="right"
            onHandlerClick={onOpen}
            text="Add user to group"
          />
          <Button
            disabled={selectedGroupUsers.length === 0}
            onClick={this.handleDeactivateGroupUsers}
            secondary
          >
            Deactivate
          </Button>
          <Button
            disabled={selectedGroupUsers.length === 0}
            onClick={this.handleActivateGroupUsers}
            secondary
          >
            Activate
          </Button>
          <Button
            disabled={selectedGroupUsers.length === 0}
            onClick={this.handleDeleteGroupUsers}
            secondary
          >
            Remove
          </Button>
        </HeaderItemTab>
        <SelectItemModal
          isOpen={isOpen}
          title="Add user to group"
          searchBarPlaceholder="Search users"
          searchTerm={searchTerm}
          loading={isFetchingUsers}
          items={users}
          formatListItem={user => <UserInfoFormatter user={user} />}
          onSearch={onSearchUser}
          onClose={onClose}
          onSubmit={onAddUsers}
        />
      </Fragment>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    selectedGroupUsers: selectors.selectSelectedGroupUser()
  })

const mapDispatch = dispatch =>
  bindActionCreators({ deleteGroupUser, updateGroupUserStatus }, dispatch)

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  modal,
  withRouter
)(GroupUsersActionBar)
