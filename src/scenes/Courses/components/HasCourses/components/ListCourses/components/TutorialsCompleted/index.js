import React from "react"
import CircleProgressBar from "base_components/CircleProgressBar"
import styled from "styled-components"

// TODO probably try to move CompletedCircleBar component
const TutorialsCompleted = ({ className }) => (
  <div className={className}>
    <CircleProgressBar small percentage={(20 / 22) * 100} />
    <span className={`${className}__delimeter`} />
    <span className={`${className}__status`}>20 of 22 completed</span>
  </div>
)

TutorialsCompleted.propTypes = {}

export default styled(TutorialsCompleted)`
  display: flex;
  justify-content: center;
  margin: 0 10px;

  &__delimeter {
    margin-right: 8px;
  }

  &__status {
    margin-top: 4px;
    font-size: 10px;
    color: #9fa6ad;
    width: 60px;
  }
`
