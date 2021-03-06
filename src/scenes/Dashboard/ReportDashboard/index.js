import React from "react"

import Container from "base_components/Container"
import ReportTutorialCompleted from "./components/ReportTutorialCompleted"
import ReportLatestFeedback from "./components/ReportLatestFeedback"
import ReportLatestGroupActivity from "./components/ReportLatestGroupActivity"

// Container all the components for report
const ReportContainer = Container.extend`
  background-color: #f4f4f4;
  margin: 0;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 40%;
    padding: 1.8em 1.8em;
  }
`

// for tutorial completed and some reports component
const ReportDashboard = () => (
  <ReportContainer>
    <ReportTutorialCompleted />
    <ReportLatestFeedback />
    <ReportLatestGroupActivity />
  </ReportContainer>
)

export default ReportDashboard
