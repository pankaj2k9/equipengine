import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { toastr } from "react-redux-toastr"
import { withRouter } from "react-router-dom"
import { compose, pure } from "recompose"
import { bindActionCreators } from "redux"
import { createStructuredSelector } from "reselect"

import BorderedTitle from "base_components/BorderedTitle"
import SearchActionBar from "base_components/SearchActionBar"
import VerticalTabs from "base_components/VerticalTabs"
import modal from "hoc/modal"

import CreateGroupModal from "../CreateGroupModal"
import GroupContentTabs from "../GroupContentTabs"
import GroupItemFormatter from "../GroupItemFormatter"
import { createGroup, fetchGroups } from "../thunks"
import { selectors, types, actions } from "../ducks"

class AdminGroups extends Component {
  componentDidMount() {
    const { fetchGroups, groups, location, match, selectGroup } = this.props

    if (groups.length === 0) {
      fetchGroups({}).then(({ payload }) => {
        const id = location.pathname.replace(match.path, "").replace("/", "")

        if (id) {
          selectGroup({
            group: payload.groups.find(group => group.id.toString() === id)
          })
        }
      })
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
    const { history, selectGroup } = this.props

    history.push(`/secure/admin/groups/${group.id}`)

    selectGroup({ group })
  }

  render() {
    const {
      group,
      groups,
      isDeletingGroup,
      isFetchingGroups,
      isSavingGroup,
      isOpen,
      onOpen,
      onClose
    } = this.props

    return (
      <Fragment>
        <BorderedTitle title="Group Manager" />

        <VerticalTabs
          tabs={groups}
          tabFormatter={tab => <GroupItemFormatter group={tab} />}
          loading={isDeletingGroup || isFetchingGroups}
          selectedTab={group && group.id}
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
    group: selectors.selectGroup(),
    groups: selectors.selectGroups(),
    isDeletingGroup: selectors.selectIsDeletingGroup(),
    isFetchingGroups: selectors.selectIsFetchingGroups(),
    isSavingGroup: selectors.selectIsSavingGroup()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    { createGroup, fetchGroups, selectGroup: actions.selectGroup },
    dispatch
  )

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
