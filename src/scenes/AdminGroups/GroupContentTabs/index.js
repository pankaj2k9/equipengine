import React from "react"
import { Tab } from "react-bootstrap"
import { withRouter } from "react-router-dom"
import { compose, pure, withState } from "recompose"

import features from "features"
import Centerer from "base_components/PageCenterer"

import GroupSettingsTab from "../GroupSettingsTab"

import { Tabs } from "./elements"

const GroupContent = ({ groupId }) =>
  groupId ? (
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

export default compose(
  withRouter,
  withState("groupId", null, props =>
    props.location.pathname.replace(props.match.url, "").replace("/", "")
  ),
  pure
)(GroupContent)
