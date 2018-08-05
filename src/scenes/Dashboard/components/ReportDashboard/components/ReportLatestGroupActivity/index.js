import React from "react"

import PanelReport from "../PanelReport"
import ListReport from "../ListReport"
import { Placeholder } from "../elements"

const reports = [
  {
    id: "jhmmasdfl",
    date: {
      date: "22 Sep",
      time: "2:00am"
    },
    description: (
      <p>
        Jill Mane commented on{" "}
        <a>Tutorial 1.3: Becoming Equipped to Communicate</a>
      </p>
    )
  },
  {
    id: "jsladfj3j4l",
    date: {
      date: "22 Sep",
      time: "2:00am"
    },
    description: (
      <p>
        Jon Mcall commented on <a>Tutorial 1.1: Communication and Culture</a>
      </p>
    )
  }
]

const ReportLatestGroupActivity = () => (
  <PanelReport title="Latest Group Activiy">
    {reports.length ? (
      <ListReport reports={reports} />
    ) : (
      <Placeholder>No feedback to show.</Placeholder>
    )}
  </PanelReport>
)

export default ReportLatestGroupActivity
