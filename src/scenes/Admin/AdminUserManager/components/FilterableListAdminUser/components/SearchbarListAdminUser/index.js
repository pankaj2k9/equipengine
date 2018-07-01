import React from "react"
import styled from "styled-components"
// Container
import { ContainerSearchbarList } from "../../../../../components/ContainerAdminPanel/components/ContainerFilterableList"
// Sub components
import Dropdown from "base_components/Dropdown"
import { MenuItem } from "react-bootstrap"
import Button from "base_components/RootButton"
import Form, { Text } from "base_components/RootForm"

const DropdownExtend = Dropdown.extend`
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
`

const SearchbarListAdminUser = styled(({ className }) => (
  <ContainerSearchbarList className={className}>
    <Button secondary>Show All</Button>
    <DropdownExtend title="Refine" id="dropdown-size-medium">
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3">Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownExtend>
    <Form>
      <Text name="create-user" placeholder="Search users" />
    </Form>
    <Button>Create a user</Button>
  </ContainerSearchbarList>
))`
  @media screen and (min-width: 768px) {
    & > * {
      height: 40px;
      width: 20% !important;
    }

    & > *:nth-child(3) {
      width: 35% !important;
    }
  }
`

export default SearchbarListAdminUser
