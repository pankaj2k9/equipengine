import React from "react"
import PropTypes from "prop-types"

import { AccessableContainer, Root, StyledPanel } from "./elements"

const ExpandableCourseDescription = ({ description, expanded }) => {
  const assessableItems = [
    "Text goes here that explains what this course is about and can include instructions.",
    "Text goes here that explains what this course is about and can include instructions.",
    "Text goes here that explains what this course is about and can include instructions."
  ]

  // assessable items list
  const assessableList = assessableItems.map((item, i) => (
    <li key={i}>{`- ${item}`}</li>
  ))

  return (
    <Root>
      <StyledPanel collapsible expanded={expanded}>
        <p>{description}</p>
        <AccessableContainer>
          <header>
            <p>Assessable Outcomes</p>
          </header>
          <ul>{assessableList}</ul>
        </AccessableContainer>
      </StyledPanel>
    </Root>
  )
}

ExpandableCourseDescription.propTypes = {
  expanded: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
}

export default ExpandableCourseDescription
