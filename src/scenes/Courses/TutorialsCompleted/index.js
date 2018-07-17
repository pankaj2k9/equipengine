import React from "react"
import CircleProgressBar from "base_components/CircleProgressBar"

import { Delimeter, Root, Status } from "./elements"

// TODO probably try to move CompletedCircleBar component
const TutorialsCompleted = ({ count, completed }) => (
  <Root>
    <CircleProgressBar
      small
      percentage={count === 0 ? 0 : (completed / count) * 100}
    />
    <Delimeter />
    <Status>
      {completed} of {count} completed
    </Status>
  </Root>
)

TutorialsCompleted.propTypes = {}

export default TutorialsCompleted
