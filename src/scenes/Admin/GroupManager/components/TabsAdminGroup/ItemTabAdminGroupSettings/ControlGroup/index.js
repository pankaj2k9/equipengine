import React from "react"
import { withHandlers } from "recompose"

import ListControl, { ListItemControl } from "base_components/ListControl"
import Button from "base_components/RootButton"
import { Label } from "base_components/RootForm"

import { Root } from "./elements"

const ControlGroup = ({ isGroupActive, toggleStatus }) => (
  <Root>
    <ListControl>
      <ListItemControl>
        <Button onClick={toggleStatus} large light lightBorder>
          {isGroupActive ? "Pause Group" : "Start group"}
        </Button>
        <Label light>
          Group remains visible to teachers but access is denied for students.
        </Label>
      </ListItemControl>
      <ListItemControl>
        <Button light large lightBorder>
          Remove Group
        </Button>
        <Label light>
          Once this group has been removed it cannot be restored. All data will
          be lost.
        </Label>
      </ListItemControl>
    </ListControl>
  </Root>
)

export default withHandlers({
  toggleStatus: ({ isGroupActive, onChange }) => () =>
    onChange(!isGroupActive, "isGroupActive")
})(ControlGroup)
