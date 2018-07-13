import React from "react"

import ContainerFilterableList from "scenes/Admin/components/ContainerAdminPanel/components/ContainerFilterableList"

import Toolbar from "./Toolbar"
import List from "./List"

const FilterableListAdminUser = ({ users }) => (
  <ContainerFilterableList>
    <Toolbar />
    <List users={users} />
  </ContainerFilterableList>
)

export default FilterableListAdminUser
