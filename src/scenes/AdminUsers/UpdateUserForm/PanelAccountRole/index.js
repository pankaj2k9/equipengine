import React from "react"

import DropdownGroup from "./DropdownGroup"
import AccountGroup from "./AccountGroup"
import MessengerAccessGroup from "./MessengerAccessGroup"

import { Root } from "./elements"

const PanelAccountRole = ({
  role,
  hasFileControlPrivelegies,
  messengerAccess,
  isSuspended,
  onChange
}) => (
  <Root title="Account Role">
    <DropdownGroup role={role} onChange={onChange} />
    <AccountGroup
      hasFileControlPrivelegies={hasFileControlPrivelegies}
      onChange={onChange}
    />
    <MessengerAccessGroup
      // isSuspended={isSuspended}
      messengerAccess={messengerAccess}
      onChange={onChange}
    />
  </Root>
)

export default PanelAccountRole
