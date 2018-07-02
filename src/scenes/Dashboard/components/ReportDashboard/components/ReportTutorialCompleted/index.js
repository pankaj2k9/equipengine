import React from "react"
import styled from "styled-components"
import CircleProgressBar from "base_components/CircleProgressBar"

import PanelReport from "../PanelReport"
import BoxMeta from "./components/BoxMeta"

// this will hold the components for tutorials completed panel
const ContainerReportTutorial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: center;
  }
`

// we need to compose component for tutorials completed
const ReportTutorialCompleted = () => (
  <PanelReport title="Total Tutorials Completed">
    <ContainerReportTutorial>
      <BoxMeta spanFirst="2 of 3" spanLast="Completed" />
      <CircleProgressBar
        strokeWidth={2}
        percentage={(100 * 2) / 3}
        text="Tutorials"
      />
      <BoxMeta spanFirst="1" spanLast="Remaining" />
    </ContainerReportTutorial>
  </PanelReport>
)

export default ReportTutorialCompleted
