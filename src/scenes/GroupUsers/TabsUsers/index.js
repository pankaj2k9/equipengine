import React, { Component } from "react"

// for Tab Component
import { Tab } from "react-bootstrap"
import Tabs from "base_components/Tabs"

// other components.
import TabUser from "../TabUser"

import { STUDENT_ROLE, TEACHER_ROLE } from "services/constants"

class TabsUsers extends Component {
  render() {
    return (
      <Tabs unmountOnExit>
        <Tab eventKey={1} title="All">
          <TabUser />
        </Tab>
        <Tab eventKey={2} title="Students">
          <TabUser role={STUDENT_ROLE} />
        </Tab>
        <Tab eventKey={3} title="Teachers/Facilitator">
          <TabUser role={TEACHER_ROLE} />
        </Tab>
      </Tabs>
    )
  }
}

export default TabsUsers
