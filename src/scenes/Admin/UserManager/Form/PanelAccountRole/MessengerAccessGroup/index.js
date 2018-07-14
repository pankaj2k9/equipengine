import React from "react"

import { Label } from "base_components/RootForm"

import { Root, SwitchMessenger } from "./elements"

const MessengerAccess = () => (
  <Root isSpaceBetween>
    <Label>Messenger Access</Label>
    <SwitchMessenger name="messengerAccess" />
  </Root>
)

export default MessengerAccess
