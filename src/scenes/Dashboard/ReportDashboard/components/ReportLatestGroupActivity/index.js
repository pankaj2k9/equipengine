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
    userName: "Jill Mane",
    tutorialName: "Tutorial 1.3: Becoming Equipped to Communicate",
    tutorialId: 2,
    courseId: 1,
    groupId: 3
  },
  {
    id: "jsladfj3j4l",
    date: {
      date: "22 Sep",
      time: "2:00am"
    },
    userName: "Jon Mcall",
    tutorialName: "Tutorial 1.1: Communication and Culture",
    tutorialId: 2,
    courseId: 1,
    groupId: 3
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
