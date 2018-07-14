import React from "react"

import DropdownGroup from "./DropdownGroup"
import AccountGroup from "./AccountGroup"
import MessengerAccessGroup from "./MessengerAccessGroup"

import { Root } from "./elements"

const PanelAccountRole = () => (
  <Root title="Account Role">
    <DropdownGroup />
    <AccountGroup />
    <MessengerAccessGroup />
  </Root>
)

export default PanelAccountRole
