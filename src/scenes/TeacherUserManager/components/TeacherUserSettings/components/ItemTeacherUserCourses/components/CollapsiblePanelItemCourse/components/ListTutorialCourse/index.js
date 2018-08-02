import React from "react"
import styled from "styled-components"

import ListItemTutorial from "./components/ListItemTutorial"

// this is for list
const List = styled.ul`
  overflow-x: auto;
`

// This is the main component.
const ListTutorialCourse = ({ tutorials }) => (
  <List>
    {tutorials.map(tutorial => (
      <ListItemTutorial key={tutorial.id} tutorial={tutorial} />
    ))}
    <ListItemTutorial isReport />
  </List>
)

export default ListTutorialCourse
