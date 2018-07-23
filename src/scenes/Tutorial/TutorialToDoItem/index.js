import React from "react"

import { ListItem, Icon, Label } from "./elements"

const TutorialToDoItem = ({ count, label, icon }) => (
  <ListItem>
    <Icon alt={label} src={icon} />
    <Label>
      {count} x {label}
    </Label>
  </ListItem>
)

export default TutorialToDoItem
