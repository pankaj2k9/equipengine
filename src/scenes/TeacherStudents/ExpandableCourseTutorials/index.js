import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Panel } from "react-bootstrap"
//
import TutorialListItem from "../TutorialListItem"

// this is for list
const List = styled.ul`
  overflow-x: auto;
`

// overriding the styles for the root panel component.
const Root = styled(Panel)`
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

class ExpandableCourseTutorials extends Component {
  render() {
    const { isOpenPanel, tutorials } = this.props
    return (
      <Root collapsible expanded={isOpenPanel}>
        <List>
          {tutorials.map(tutorial => (
            <TutorialListItem key={tutorial.id} tutorial={tutorial} />
          ))}
          <TutorialListItem isReport />
        </List>
      </Root>
    )
  }
}

ExpandableCourseTutorials.propTypes = {
  isOpenPanel: PropTypes.bool.isRequired
}

export default ExpandableCourseTutorials
