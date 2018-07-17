import React from "react"
import styled from "styled-components"
//

const NoActivities = ({ className }) => (
  <div className={className}>
    <p>No activity to show.</p>
  </div>
)

export default styled(NoActivities)`
  padding: 1em 0;
  margin-bottom: 1em;

  p {
    color: #9fa6ad;
    margin-bottom: 0;
    text-align: inherit;
    font-size: 12px;
    padding-left: 18px;
  }
`
