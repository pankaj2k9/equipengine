import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ReportPanel = styled(({ className, title, children }) => (
  <div className={className}>
    <header>{title}</header>
    <div>{children}</div>
  </div>
))`
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 3px;

  &:not(:last-child) {
    margin-bottom: 1.8em;
  }

  > header {
    border-bottom: 1px solid #e2e2e2;
    color: #111111;
    text-align: left;
    padding: 0.6em 0 0.6em 1.5em;
  }

  > div {
    padding: 1.4em;
  }
`

ReportPanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default ReportPanel
