import React from "react"
import { bindActionCreators } from "redux"
import { compose, lifecycle, pure, withHandlers, withState } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { toastr } from "react-redux-toastr"
import { withRouter } from "react-router-dom"

import { createGroup, fetchGroups } from "../thunks"
import CreateGroupModal from "../CreateGroupModal"
import GroupItemFormatter from "../GroupItemFormatter"
import GroupContent from "../GroupContent"
import modal from "hoc/modal"
import SearchActionBar from "base_components/SearchActionBar"
import { selectors, types } from "../ducks"
import VerticalTabs from "base_components/VerticalTabs"

const AdminGroups = ({
  fetchGroups,
  groups,
  groupId,
  isFetchingGroups,
  isSavingGroup,
  isOpen: isOpenCreateGroupModal,
  onOpen: onOpenCreateGroupModal,
  onClose: onCloseCreateGroupModal,
  handleCreateGroup,
  handleTabClick
}) => (
  <div>
    <VerticalTabs
      tabs={groups}
      tabFormatter={tab => <GroupItemFormatter group={tab} />}
      loading={isFetchingGroups}
      selectedTab={
        groupId && groups.find(group => group.id.toString() === groupId)
      }
      actionBar={
        <SearchActionBar
          onCreate={onOpenCreateGroupModal}
          onSearch={term => fetchGroups({ term })}
        />
      }
      content={<GroupContent />}
      onTabClick={handleTabClick}
    />
    <CreateGroupModal
      isOpen={isOpenCreateGroupModal}
      isSubmitting={isSavingGroup}
      onClose={onCloseCreateGroupModal}
      onSubmit={handleCreateGroup}
    />
  </div>
)

const mapState = () =>
  createStructuredSelector({
    groups: selectors.selectGroups(),
    isFetchingGroups: selectors.selectIsFetchingGroups(),
    isSavingGroup: selectors.selectIsSavingGroup()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      createGroup,
      fetchGroups
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
      if (!this.props.groups || this.props.groups.length === 0) {
        this.props.fetchGroups({})
      }
    }
  }),
  withRouter,
  modal,
  withHandlers({
    handleTabClick: props => group =>
      props.history.push(`/secure/admin/groups/${group.id}`)
  }),
  withHandlers({
    handleCreateGroup: props => fields => {
      props.createGroup(fields).then(action => {
        props.onClose()
        if (action.type === types.CREATE_GROUP_SUCCESS) {
          props.handleTabClick(action.payload.group)
          toastr.success(
            "Success",
            `New group "${fields.title}" is succesffully created`
          )
        } else {
          toastr.error("Error", `Failed to create group "${fields.title}"`)
        }
      })
    }
  }),
  withState("groupId", null, props =>
    // retrieve group id from url if provided
    props.location.pathname.replace(props.match.url, "").replace("/", "")
  ),
  pure
)(AdminGroups)
