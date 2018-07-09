import React from "react"
import styled from "styled-components"
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap"

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

const DropdownGroups = () => {
  return (
    <StyledButtonToolbar>
      <StyledDropdownButton title="Group Select" id="dropdown-size-medium">
        <MenuItem eventKey="1">Connect: Level 1</MenuItem>
        <MenuItem eventKey="2">Connect: Level 2</MenuItem>
        <MenuItem eventKey="3">Connect: Level 3</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </StyledDropdownButton>
    </StyledButtonToolbar>
  )
}

export default DropdownGroups
