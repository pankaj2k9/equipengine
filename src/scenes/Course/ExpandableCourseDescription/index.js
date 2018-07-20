import React from "react"
import PropTypes from "prop-types"

import { Root, StyledPanel } from "./elements"

const ExpandableCourseDescription = ({ description, expanded }) => {
  return (
    <Root>
      <StyledPanel collapsible expanded={expanded}>
        <p>{description}</p>
      </StyledPanel>
    </Root>
  )
}

ExpandableCourseDescription.propTypes = {
  expanded: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
}

export default ExpandableCourseDescription
