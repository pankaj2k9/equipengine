import React from "react"

import { Root, List } from "./elements"
import { ButtonIcon } from "base_components/RootButton"
import IconAdd from "react-icons/lib/md/add"

const AddButton = () => (
  <ButtonIcon light lightBorder>
    <IconAdd /> Add group
  </ButtonIcon>
)

const AccountContainer = () => (
  <Root title="Groups" AdditionalTitle={AddButton}>
    <List>
      <div>group1</div>
      <div>group2</div>
    </List>
  </Root>
)

export default AccountContainer
