import React from "react"

import ListControl, { ListItemControl } from "base_components/ListControl"
import Button from "base_components/RootButton"
import { Label } from "base_components/RootForm"

import { Root } from "./elements"

const ControlGroup = () => (
  <Root>
    <ListControl>
      <ListItemControl>
        <Button large light lightBorder>
          Pause Group
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

export default ControlGroup
