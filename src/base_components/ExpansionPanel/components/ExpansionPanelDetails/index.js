import PropTypes from "prop-types"
import React from "react"

import { ExpandPanel } from "./elements"

const ExpansionPanelDetails = ({ children, expanded }) => (
  <ExpandPanel collapsible expanded={expanded}>
    {children}
  </ExpandPanel>
)

ExpansionPanelDetails.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  expanded: PropTypes.bool.isRequired
}

export default ExpansionPanelDetails
