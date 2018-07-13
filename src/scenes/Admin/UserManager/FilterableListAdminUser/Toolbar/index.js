import React from "react"

import { ContainerSearchbarList } from "scenes/Admin/components/ContainerAdminPanel/components/ContainerFilterableList"

import Button from "base_components/RootButton"
import Form, { Text } from "base_components/RootForm"

const Toolbar = () => (
  <ContainerSearchbarList>
    <Button secondary>Show All</Button>
    <Form>
      <Text name="create-user" placeholder="Search users" />
    </Form>
    <Button>Create a user</Button>
  </ContainerSearchbarList>
)

export default Toolbar
