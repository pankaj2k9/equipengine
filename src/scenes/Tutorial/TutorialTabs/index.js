import React from "react"
import { Tab } from "react-bootstrap"

// base components
import Tabs from "base_components/Tabs"

// sub-components
import { Root } from "./elements"
import TutorialFilesTab from "../TutorialFilesTab"
import TutorialTasksTab from "../TutorialTasksTab"

const TutorialTabs = ({ tasks }) => {
  const files = [
    {
      id: "ysdjfk",
      file: "Submissions instructions.pdf",
      date: "22 April 17"
    },
    {
      id: "yskjdksf",
      file: "Showing culture.ptt",
      date: "19 March 17"
    }
  ]

  return (
    <Root>
      <Tabs>
        <Tab eventKey={1} title="Questions & Activities">
          <TutorialTasksTab tasks={tasks} />
        </Tab>
        <Tab eventKey={2} title="Files">
          <TutorialFilesTab files={files} />
        </Tab>
      </Tabs>
    </Root>
  )
}

TutorialTabs.propTypes = {}

export default TutorialTabs
