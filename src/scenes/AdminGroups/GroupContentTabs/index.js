import React from "react"
import { compose, pure, withState } from "recompose"
import { Tab } from "react-bootstrap"
import { withRouter } from "react-router-dom"

import features from "features"
import Box from "base_components/Box"
import Tabs from "base_components/Tabs"
import GroupSettingsTab from "../GroupSettingsTab"
import Centerer from "base_components/PageCenterer"

const GroupContent = ({ groupId }) => {
  if (!groupId) {
    return <Centerer>Please, select any group to see content</Centerer>
  }
  return (
    <Box>
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
    </Box>
  )
}

export default compose(
  withRouter,
  withState("groupId", null, props =>
    // retrieve group id from url if provided
    props.location.pathname.replace(props.match.url, "").replace("/", "")
  ),
  pure
)(GroupContent)
