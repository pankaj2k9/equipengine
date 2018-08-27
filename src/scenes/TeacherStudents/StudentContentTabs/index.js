import React from "react"
import { Tab } from "react-bootstrap"

import Tabs from "base_components/Tabs"
import StudentCoursesTab from "../StudentCoursesTab"
import StudentSettingsTab from "../StudentSettingsTab"

const StudentContentTab = () => (
  <Tabs>
    <Tab eventKey={1} title="Courses">
      <StudentCoursesTab />
    </Tab>
    <Tab eventKey={2} title="User Settings">
      <StudentSettingsTab />
    </Tab>
  </Tabs>
)

export default StudentContentTab
