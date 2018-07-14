import React from "react"

import ListControl, { ListItemControl } from "base_components/ListControl"

import { Root, Button, Label } from "./elements"

const PanelControlGroup = () => (
  <Root>
    <ListControl>
      <ListItemControl>
        <Button large light lightBorder>
          Suspend user
        </Button>
        <Label light>
          Once student account is suspended you can activate again at any time.
        </Label>
      </ListItemControl>
      <ListItemControl>
        <Button light large lightBorder>
          Remove user
        </Button>
        <Label light>
          If this user is removed all data associated with the user is lost.
        </Label>
      </ListItemControl>
    </ListControl>
  </Root>
)

export default PanelControlGroup
