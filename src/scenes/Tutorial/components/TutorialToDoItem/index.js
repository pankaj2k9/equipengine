import React from "react"

import { ListItem, Icon, Label } from "./elements"

const TutorialToDoItem = ({ text, icon }) => (
  <ListItem>
    <Icon alt={text} src={icon} />
    <Label>{text}</Label>
  </ListItem>
)

export default TutorialToDoItem
