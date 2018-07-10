import React from "react"

import ButtonAdd from "base_components/ButtonAdd"
import HeaderItemTab from "base_components/HeaderItemTab"

import { ButtonSecondary } from "./elements"

const HeaderAdminGroupUsers = ({ onOpen }) => (
  <HeaderItemTab>
    <ButtonAdd onHandlerClick={onOpen} text="Add User To Group" />
    <ButtonSecondary secondary>Deactivate</ButtonSecondary>
    <ButtonSecondary secondary>Activate</ButtonSecondary>
    <ButtonSecondary secondary>Remove</ButtonSecondary>
  </HeaderItemTab>
)

export default HeaderAdminGroupUsers
