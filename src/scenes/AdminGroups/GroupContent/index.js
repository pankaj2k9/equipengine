import React from "react"

import { Tab } from "react-bootstrap"

import Box from "base_components/Box"
import Tabs from "base_components/Tabs"
import ItemTabAdminGroupSettings from "./ItemTabAdminGroupSettings"
import ItemTabAdminGroupUsers from "./ItemTabAdminGroupUsers"
import ItemTabAdminGroupCourses from "./ItemTabAdminGroupCourses"

const GroupContent = () => (
  <Box>
    <Tabs>
      <Tab eventKey={1} title="Courses">
        <ItemTabAdminGroupCourses />
      </Tab>
      <Tab eventKey={2} title="Users">
        <ItemTabAdminGroupUsers />
      </Tab>
      <Tab eventKey={3} title="Settings">
        <ItemTabAdminGroupSettings />
      </Tab>
    </Tabs>
  </Box>
)

export default GroupContent
