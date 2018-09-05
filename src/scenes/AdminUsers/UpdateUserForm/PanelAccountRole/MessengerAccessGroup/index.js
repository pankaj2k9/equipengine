import React from "react"

import { Label } from "base_components/RootForm"

import { Root, SwitchMessenger } from "./elements"

const MessengerAccess = ({ messengerAccess, onChange }) => (
  <Root isSpaceBetween>
    <Label>Messenger Access</Label>
    <SwitchMessenger
      name="messengerAccess"
      value={messengerAccess}
      onChange={e => onChange(e.target.checked, "messengerAccess")}
    />
  </Root>
)

export default MessengerAccess
