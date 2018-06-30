import React from "react"
//
import Dropdown from "base_components/Dropdown"
import { MenuItem } from "react-bootstrap"

// extending the dropdown button style.
const ExtendDropdown = Dropdown.extend`
  padding: 11px 15px 12px;
  background-color: #d8d8d8;
  border: 0;
  text-transform: uppercase;
  font-family: "karla", sans-serif;
  font-size: 12px;
  font-weight: 800;
  border-radius: 3px;
  width: 100%;

  .caret {
    padding-bottom: 4px;
  }

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

const DropdownSortBy = () => (
  <ExtendDropdown title="Sort by" id="dropdown-size-medium">
    <MenuItem eventKey="1">Action</MenuItem>
    <MenuItem eventKey="2">Another action</MenuItem>
    <MenuItem eventKey="3">Something else here</MenuItem>
    <MenuItem divider />
    <MenuItem eventKey="4">Separated link</MenuItem>
  </ExtendDropdown>
)

export default DropdownSortBy
