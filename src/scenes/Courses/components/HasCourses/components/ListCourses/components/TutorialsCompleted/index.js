import React from "react"
import CircleProgressBar from "base_components/CircleProgressBar"
import styled from "styled-components"

// TODO probably try to move CompletedCircleBar component
const TutorialsCompleted = ({ className }) => (
  <div className={className}>
    <div className="progress-bar-wrapper">
      <CircleProgressBar small percentage={(20 / 22) * 100} />
    </div>
    <span className="status-wrapper">0 of 22 completed</span>
  </div>
)

TutorialsCompleted.propTypes = {}

export default styled(TutorialsCompleted)`
  display: flex;
  align-items: center;
  margin-left: 26px;

  .progress-bar-wrapper {
    margin-right: 10px;
  }

  .status-wrapper {
    font-size: 10px;
    color: #9fa6ad;
    width: 60px;
  }
`
