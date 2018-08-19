import React, { Component } from "react"
import { connect } from "react-redux"
import { compose } from "recompose"
import { bindActionCreators } from "redux"
import { createStructuredSelector } from "reselect"

import ListControl, { ListItemControl } from "base_components/ListControl"
import Button from "base_components/RootButton"
import { Label } from "base_components/RootForm"

import { Root } from "./elements"
import { updateGroup } from "../../thunks"
import { selectors } from "../../ducks"

class ControlGroup extends Component {
  handleStartGroup = () => {
    const { group } = this.props
    const { updateGroup } = this.props

    updateGroup({ id: group.id, group: { status: "active" } })
  }

  handlePauseGroup = () => {
    const { group } = this.props
    const { updateGroup } = this.props

    updateGroup({ id: group.id, group: { status: "pause" } })
  }

  render() {
    const { group } = this.props

    return (
      <Root>
        <ListControl>
          <ListItemControl>
            {group.status === "active" ? (
              <Button onClick={this.handlePauseGroup} large light lightBorder>
                Pause Group
              </Button>
            ) : (
              <Button onClick={this.handleStartGroup} large light lightBorder>
                Start group
              </Button>
            )}
            <Label light>
              Group remains visible to teachers but access is denied for
              students.
            </Label>
          </ListItemControl>
          <ListItemControl>
            <Button light large lightBorder>
              Remove Group
            </Button>
            <Label light>
              Once this group has been removed it cannot be restored. All data
              will be lost.
            </Label>
          </ListItemControl>
        </ListControl>
      </Root>
    )
  }
}

const mapState = () =>
  createStructuredSelector({ group: selectors.selectGroup() })

const mapDispatch = dispatch => bindActionCreators({ updateGroup }, dispatch)

export default compose(component =>
  connect(
    mapState,
    mapDispatch
  )(component)
)(ControlGroup)
