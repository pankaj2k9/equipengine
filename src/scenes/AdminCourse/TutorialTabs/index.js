import React from "react"
import { Tab } from "react-bootstrap"
//
import Tabs from "base_components/Tabs"
import TutorialTasksTab from "../TutorialTasksTab"
import TutorialBasicsTab from "../TutorialBasicsTab"
import TutorialFilesTab from "../TutorialFilesTab"
import Box from "base_components/Box"

const TutorialTabs = ({ tutorial }) => {
  if (!tutorial) {
    return <Box>Please, select any tutorial to see tutorial info</Box>
  }

  return (
    <Box>
      <Tabs>
        <Tab eventKey={1} title="Tasks">
          <TutorialTasksTab />
        </Tab>
        <Tab eventKey={2} title="Files">
          <TutorialFilesTab />
        </Tab>
        <Tab eventKey={3} title="Settings">
          <TutorialBasicsTab />
        </Tab>
      </Tabs>
    </Box>
  )
}

export default TutorialTabs
