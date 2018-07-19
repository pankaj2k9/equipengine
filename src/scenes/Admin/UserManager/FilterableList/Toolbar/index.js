import React from "react"

import { ContainerSearchbarList } from "scenes/Admin/components/ContainerAdminPanel/components/ContainerFilterableList"

import Button from "base_components/RootButton"
import Form, { Text } from "base_components/RootForm"

import form from "hoc/form"

const Toolbar = ({ fields: { term }, onChange }) => (
  <ContainerSearchbarList>
    <Button secondary>Show All</Button>
    <Form>
      <Text
        value={term}
        onChange={e => onChange(e.target.value, "term")}
        name="create-user"
        placeholder="Search users"
      />
    </Form>
    <Button>Create a user</Button>
  </ContainerSearchbarList>
)

export default form({ term: "" })(Toolbar)
