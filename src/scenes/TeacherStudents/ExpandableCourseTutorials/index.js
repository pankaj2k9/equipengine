import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Panel } from "react-bootstrap"
// sub components.
import TutorialListItem from "../TutorialListItem"

// this is for list
const List = styled.ul`
  overflow-x: auto;
`

// overriding the styles for the root panel component.
const ContainerCollapsiblePanel = styled(Panel)`
  .panel-body {
    padding-bottom: 0.8em;
    border-bottom: 1px solid #dadada;
  }

  @media screen and (min-width: 768px) {
    .panel-body {
      padding: 0 2.4em;
    }
  }
`

const CollapsiblePanelItemCourse = ({ isOpenPanel, tutorials }) => (
  <ContainerCollapsiblePanel collapsible expanded={isOpenPanel}>
    <List>
      {tutorials.map(tutorial => (
        <TutorialListItem key={tutorial.id} tutorial={tutorial} />
      ))}
      <TutorialListItem isReport />
    </List>
  </ContainerCollapsiblePanel>
)

CollapsiblePanelItemCourse.propTypes = {
  isOpenPanel: PropTypes.bool.isRequired
}

export default CollapsiblePanelItemCourse
