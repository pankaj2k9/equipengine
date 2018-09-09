import React from "react"

import { Label } from "base_components/RootForm"

import { Root, SwitchMessenger } from "./elements"

const MessengerAccess = ({ messengerAccess, onChange }) => (
  <Root isSpaceBetween>
    <Label>Messenger Access</Label>
    <SwitchMessenger
      name="messengerAccess"
      value={messengerAccess}
      onChange={onChange}
    />
  </Root>
)

export default MessengerAccess
