import React from "react"
import { MenuItem } from "react-bootstrap"

import { Label } from "base_components/RootForm"

import {
  Root,
  FormGroupUser,
  DropdownExtend,
  StyledButtonTopbar
} from "./elements"

const PanelUsers = () => (
  <Root title="Users">
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
  </Root>
)

export default PanelUsers
