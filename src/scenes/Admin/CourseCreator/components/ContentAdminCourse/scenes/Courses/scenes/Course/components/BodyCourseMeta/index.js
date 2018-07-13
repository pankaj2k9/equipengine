import React from "react"
import styled from "styled-components"
// for Tab Component
import { Tab } from "react-bootstrap"
import Tabs from "base_components/Tabs"
//
import Box from "base_components/Box"
import ItemTutorialCourse from "./components/ItemTutorialCourse"
import ItemReportingCourse from "./components/ItemReportingCourse"

const BodyCourseMeta = styled(({ className }) => (
  <Box className={className}>
    <Tabs className="TabsCourse">
      <Tab eventKey={1} title="Tutorials">
        <ItemTutorialCourse />
      </Tab>
      <Tab eventKey={2} title="Reporting/Assessing">
        <ItemReportingCourse />
      </Tab>
    </Tabs>
  </Box>
))`
  @media screen and (min-width: 768px) {
    padding-bottom: 85px;

    .TabsCourse > .tab-content {
      margin-top: 0;
    }
  }
`

export default BodyCourseMeta
