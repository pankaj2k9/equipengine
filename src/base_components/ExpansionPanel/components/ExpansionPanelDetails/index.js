import React from "react"
import PropTypes from "prop-types"
import { Panel } from "react-bootstrap"

const ExpansionPanelDetails = ({ children, expanded }) => (
  <Panel collapsible expanded={expanded}>
    {children}
  </Panel>
)

ExpansionPanelDetails.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  expanded: PropTypes.bool.isRequired
}

export default ExpansionPanelDetails
