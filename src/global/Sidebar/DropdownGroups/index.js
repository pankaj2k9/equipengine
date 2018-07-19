import React from "react"
import styled from "styled-components"
import { bindActionCreators } from "redux"
import { compose, lifecycle, withHandlers } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap"
import features from "features"

const StyledButtonToolbar = styled(ButtonToolbar)`
  width: 100%;
  margin-bottom: 1.8em;
`

const StyledDropdownButton = styled(DropdownButton)`
  text-shadow: none;
  background: #596065;
  color: #e2e2e2;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0;
  letter-spacing: 0.7px;
  padding: 11px;
  font-family: "karla", sans-serif;
`

const DropdownGroups = ({ groupId, groups, onChange }) => (
  <StyledButtonToolbar>
    <StyledDropdownButton title="Groups" id="dropdown-size-medium">
      {groups.map(group => (
        <MenuItem
          key={group.id}
          active={group.id.toString() === groupId}
          onClick={() => onChange({ group })}
        >
          {group.title}
        </MenuItem>
      ))}
    </StyledDropdownButton>
  </StyledButtonToolbar>
)

const mapState = () =>
  createStructuredSelector({
    groups: features.myGroups.selectors.selectMyGroups()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchGroups: features.myGroups.actions.fetchMyGroups
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  lifecycle({
    componentDidMount() {
      this.props.fetchGroups()
    }
  }),
  withRouter,
  withHandlers({
    onChange: ({ history }) => ({ group }) =>
      history.push(`/secure/${group.id}/dashboard`)
  })
)(DropdownGroups)
