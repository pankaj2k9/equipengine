import React from "react"

import { FormGroup, Text, TextArea, Label } from "base_components/RootForm"

import { Root } from "./elements"

const PanelGeneralInfo = () => (
  <Root title="General Information">
    <FormGroup>
      <Label htmlFor="group-name">Group Name</Label>
      <Text name="group-name" placeholder="Connect: Level 1" />
    </FormGroup>
    <FormGroup>
      <Label htmlFor="group-discussion">Group Discussion</Label>
      <TextArea name="group-name" placeholder="Connect: Level 1" row={4} />
    </FormGroup>
  </Root>
)

export default PanelGeneralInfo
