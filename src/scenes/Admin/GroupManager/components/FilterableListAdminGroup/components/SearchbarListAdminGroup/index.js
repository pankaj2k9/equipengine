import React from "react"
import styled from "styled-components"
// for searchbar component list admin manager group
import { ContainerSearchbarList } from "../../../../../components/ContainerAdminPanel/components/ContainerFilterableList"
// Containers
// sum forms
import Button from "base_components/RootButton"
import Form, { Text } from "base_components/RootForm"

import form from "hoc/form"

// This is searchbar for list group
const SearchbarListAdminGroup = styled(
  ({ className, fields: { term }, onChange }) => (
    <ContainerSearchbarList className={className}>
      <Button secondary>Show All</Button>
      <Form>
        <Text
          value={term}
          onChange={e => onChange(e.target.value, "term")}
          name="create-groups"
          placeholder="Search groups"
        />
      </Form>
      <Button>Create a group</Button>
    </ContainerSearchbarList>
  )
)`
  @media screen and (min-width: 768px) {
    button:first-child {
      margin-right: 0.6em;
    }

    form {
      flex: 1;
      margin-right: 0.6em;
    }
  }
`

export default form({
  term: ""
})(SearchbarListAdminGroup)
