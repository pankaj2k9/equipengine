import React from "react"

import { NumberInput } from "base_components/RootForm"
import Panel from "base_components/Panel"

import { FormGroupUser, Label } from "./elements"

const PanelUsers = () => (
  <Panel title="Users">
    <FormGroupUser>
      <Label>Group Size Limit</Label>
      <NumberInput defaultValue={0} min={0} max={5000} />
    </FormGroupUser>
  </Panel>
)

export default PanelUsers
