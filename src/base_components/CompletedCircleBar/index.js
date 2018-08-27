import React from "react"
import CircleProgressBar from "base_components/CircleProgressBar"

import { Delimeter, Root, Status } from "./elements"

const CompletedCircleBar = ({ className, count, completed }) => (
  <Root className={className}>
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

CompletedCircleBar.propTypes = {}

export default CompletedCircleBar
