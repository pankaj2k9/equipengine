import React from "react"
import styled from "styled-components"

import Button from "base_components/RootButton"

const TutorialsReportLink = styled(({ className, onReport }) => (
  <li className={`${className} ListItemTutorial`}>
    <div className="ListItemTutorial__container">
      <Button secondary onClick={() => onReport()}>
        Create Report
      </Button>
    </div>
  </li>
))`
  > .ListItemTutorial__container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1.7em 0 1.3em 0;
    border-bottom: 1px solid #dadada;

    @media screen and (max-width: 767px) {
      width: 750px;
    }
  }

  &:last-child > .ListItemTutorial__container {
    border-bottom: 0;
    padding: 1em 0;
  }

  @media screen and (min-width: 768px) {
    > .ListItemTutorial__container {
      padding: 2.3em 0;
    }
  }
`

export default TutorialsReportLink
