import React from "react"
import { MenuItem } from "react-bootstrap"

import { Label } from "base_components/RootForm"
import Dropdown from "base_components/Dropdown"

import { Root } from "./elements"

const DropdownUserRole = () => (
  <Root>
    <Label>Select user role</Label>
    <Dropdown title="Teacher" id="dropdown-size-medium">
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3">Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </Dropdown>
  </Root>
)

export default DropdownUserRole
