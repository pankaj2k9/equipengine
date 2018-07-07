import React from "react"
import styled from "styled-components"

// sub-components
import ExpansionPanelDetails from "./components/ExpansionPanelDetails"
import ExpansionPanelSummary from "./components/ExpansionPanelSummary"

const Root = styled.div`
  border: 1px solid ${props => props.theme.lightgray};
  border-radius: 4;
  margin-bottom: 1em;
`

class ExpansionPanel extends React.Component {
  state = {
    expanded: false
  }

  handleToggleExpansion = event => {
    event.preventDefault()
    // update the state
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const { title, subtitle, summary, children } = this.props
    const { expanded } = this.state
    return (
      <Root>
        <ExpansionPanelSummary
          expanded={expanded}
          title={title}
          subtitle={subtitle}
          onToggleExpansion={this.handleToggleExpansion}
        >
          {summary}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails expanded={expanded}>
          {children}
        </ExpansionPanelDetails>
      </Root>
    )
  }
}

export default ExpansionPanel
