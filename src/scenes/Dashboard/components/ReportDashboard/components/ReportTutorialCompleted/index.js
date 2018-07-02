import React from "react"
import styled from "styled-components"
import CircleProgressBar from "base_components/CircleProgressBar"

import PanelReport from "../PanelReport"
import BoxMeta from "./components/BoxMeta"

// we need to compose component for tutorials completed
const ReportTutorialCompleted = ({ className }) => (
  <PanelReport title="Total Tutorials Completed">
    <div className={className}>
      <BoxMeta spanFirst="2 of 3" spanLast="Completed" />
      <CircleProgressBar
        className={`${className}__circle-progress-bar`}
        strokeWidth={2}
        percentage={(100 * 2) / 3}
        text="Tutorials"
      />
      <BoxMeta spanFirst="1" spanLast="Remaining" />
    </div>
  </PanelReport>
)

export default styled(ReportTutorialCompleted)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: center;
  }

  &__circle-progress-bar {
    margin: 20px;
  }
`
