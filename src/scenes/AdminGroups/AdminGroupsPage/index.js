import React, { Component, Fragment } from "react"
import { bindActionCreators } from "redux"
import { compose, pure } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { toastr } from "react-redux-toastr"
import { withRouter } from "react-router-dom"

import BorderedTitle from "base_components/BorderedTitle"
import { createGroup, fetchGroups } from "../thunks"
import CreateGroupModal from "../CreateGroupModal"
import GroupItemFormatter from "../GroupItemFormatter"
import GroupContentTabs from "../GroupContentTabs"
import modal from "hoc/modal"
import SearchActionBar from "base_components/SearchActionBar"
import { selectors, types } from "../ducks"
import VerticalTabs from "base_components/VerticalTabs"

class AdminGroups extends Component {
  state = {
    groupId: null
  }

  static getDerivedStateFromProps(props) {
    return {
      groupId: props.location.pathname
        .replace(props.match.path, "")
        .replace("/", "")
    }
  }

  componentDidMount() {
    if (!this.props.groups || this.props.groups.length === 0) {
      this.props.fetchGroups({})
    }
  }

  handleCreateGroup = fields => {
    const { createGroup, onClose } = this.props

    createGroup(fields).then(action => {
      onClose()

      if (action.type === types.CREATE_GROUP_SUCCESS) {
        this.handleTabClick(action.payload.group)

        toastr.success(
          "Success",
          `New group "${fields.title}" was successfully created`
        )
      } else {
        toastr.error("Error", `Failed to create group "${fields.title}"`)
      }
    })
  }

  handleSearch = term => {
    const { fetchGroups } = this.props

    fetchGroups({ term })
  }

  handleTabClick = group => {
    const { history } = this.props

    history.push(`/secure/admin/groups/${group.id}`)
  }

  render() {
    const {
      groups,
      isFetchingGroups,
      isSavingGroup,
      isOpen,
      onOpen,
      onClose
    } = this.props
    const { groupId } = this.state

    return (
      <Fragment>
        <BorderedTitle title="Group Manager" />

        <VerticalTabs
          tabs={groups}
          tabFormatter={tab => <GroupItemFormatter group={tab} />}
          loading={isFetchingGroups}
          selectedTab={
            groupId && groups.find(group => group.id.toString() === groupId)
          }
          actionBar={
            <SearchActionBar onCreate={onOpen} onSearch={this.handleSearch} />
          }
          content={<GroupContentTabs />}
          onTabClick={this.handleTabClick}
        />

        <CreateGroupModal
          isOpen={isOpen}
          isSubmitting={isSavingGroup}
          onClose={onClose}
          onSubmit={this.handleCreateGroup}
        />
      </Fragment>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    groups: selectors.selectGroups(),
    isFetchingGroups: selectors.selectIsFetchingGroups(),
    isSavingGroup: selectors.selectIsSavingGroup()
  })

const mapDispatch = dispatch =>
  bindActionCreators({ createGroup, fetchGroups }, dispatch)

export default compose(
  withRouter,
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  modal,
  pure
)(AdminGroups)
