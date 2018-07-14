import React from "react"

import UserAvatar from "base_components/UserAvatar"
import iconUser from "resources/images/user.png"
import RoleUser from "base_components/RoleUser"
import ContainerFlex from "base_components/ContainerFlex"
import StatusCircle from "base_components/StatusCircle"

import { ItemRoot } from "./elements"

const Item = () => (
  <ItemRoot>
    <ContainerFlex isSpaceBetween>
      <ContainerFlex isAlignCenter>
        <UserAvatar image={iconUser} />
        <span>Tim Hall</span>
      </ContainerFlex>
      <ContainerFlex isAlignCenter>
        <RoleUser roleUser="Teacher" />
        <StatusCircle state="disabled" />
      </ContainerFlex>
    </ContainerFlex>
  </ItemRoot>
)

const List = () => (
  <ul>
    <Item />
    <Item />
  </ul>
)

export default List
