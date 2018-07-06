import React from "react"
import CircleProgressBar from "base_components/CircleProgressBar"

import { Delimeter, Root, Status } from "./elements"

// TODO probably try to move CompletedCircleBar component
const TutorialsCompleted = () => (
  <Root>
    <CircleProgressBar small percentage={(20 / 22) * 100} />
    <Delimeter />
    <Status>20 of 22 completed</Status>
  </Root>
)

TutorialsCompleted.propTypes = {}

export default TutorialsCompleted
