import React from "react"
import styled from "styled-components"
// Container
import { ContainerSearchbarList } from "../../../../../components/ContainerAdminPanel/components/ContainerFilterableList"
// Sub components
import Button from "base_components/RootButton"
import Form, { Text } from "base_components/RootForm"

const SearchbarListAdminUser = ({ className }) => (
  <ContainerSearchbarList className={className}>
    <Button secondary>Show All</Button>
    <Form>
      <Text name="create-user" placeholder="Search users" />
    </Form>
    <Button>Create a user</Button>
  </ContainerSearchbarList>
)

export default styled(SearchbarListAdminUser)`
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
