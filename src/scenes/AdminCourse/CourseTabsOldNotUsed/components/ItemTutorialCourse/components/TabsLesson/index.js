import React from "react"
//
import Box from "base_components/Box"
import { Tab } from "react-bootstrap"
import Tabs from "base_components/Tabs"
import ItemTabBasics from "./components/ItemTabBasics"
import ItemTabActions from "./components/ItemTabActions"
import ItemTabFiles from "./components/ItemTabFiles"
// styles
import { tabsLessonStyles } from "./styles"

const TabsLesson = tabsLessonStyles(({ className }) => (
  <Box className={className}>
    <Tabs className="TabsLesson">
      <Tab eventKey={1} title="Basics">
        <ItemTabBasics />
      </Tab>
      <Tab eventKey={2} title="Actions">
        <ItemTabActions />
      </Tab>
      <Tab eventKey={3} title="Files">
        <ItemTabFiles />
      </Tab>
    </Tabs>
  </Box>
))

export default TabsLesson
