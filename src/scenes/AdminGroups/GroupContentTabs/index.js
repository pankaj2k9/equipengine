import React from "react"
import { Tab } from "react-bootstrap"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { compose, pure } from "recompose"
import { createStructuredSelector } from "reselect"

import features from "features"
import Centerer from "base_components/PageCenterer"

import { Tabs } from "./elements"
import GroupSettingsTab from "../GroupSettingsTab"
import { selectors } from "../ducks"

const GroupContent = ({ group, isDeletingGroup }) =>
  group && group.id && !isDeletingGroup ? (
    <Tabs>
      <Tab eventKey={1} title="Courses">
        <features.adminGroupCourses.pages.GroupCourses />
      </Tab>
      <Tab eventKey={2} title="Users">
        <features.adminGroupUsers.pages.GroupUsers />
      </Tab>
      <Tab eventKey={3} title="Settings">
        <GroupSettingsTab />
      </Tab>
    </Tabs>
  ) : (
    <Centerer>Please, select any group to see content</Centerer>
  )

const mapState = () =>
  createStructuredSelector({
    group: selectors.selectGroup(),
    isDeletingGroup: selectors.selectIsDeletingGroup()
  })

export default compose(
  withRouter,
  component => connect(mapState)(component),
  pure
)(GroupContent)
