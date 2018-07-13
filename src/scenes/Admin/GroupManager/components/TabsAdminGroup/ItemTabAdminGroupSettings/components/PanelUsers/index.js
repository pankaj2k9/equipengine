import React from "react"
import styled from "styled-components"
import { ButtonToolbar, MenuItem } from "react-bootstrap"
// base components and some assets
import Panel from "base_components/Panel"
import { Label, FormGroup } from "base_components/RootForm"
import Dropdown from "base_components/Dropdown"

// extending the form group
const FormGroupUser = FormGroup.extend`
  display: flex;
  align-items: center;
`

const StyledButtonTopbar = styled(ButtonToolbar)`
  margin-top: -27px;
`

const DropdownExtend = Dropdown.extend`
  display: flex;
  width: 82px;
  align-items: center;
  justify-content: space-evenly;
`

const PanelUsers = styled(({ className }) => (
  <Panel className={className} title="Users">
    <FormGroupUser>
      <Label>Group Size Limit</Label>
      <StyledButtonTopbar>
        <DropdownExtend title="2" id="dropdown-size-medium">
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownExtend>
      </StyledButtonTopbar>
    </FormGroupUser>
  </Panel>
))`
  label {
    width: 100px;
    margin-right: 2em;
    padding-top: 0.2em;
    margin-bottom: 33px;

    &:first-child {
      margin-right: 1.7em;
    }
  }
`

export default PanelUsers
