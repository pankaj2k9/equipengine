import React from "react"

import { FormGroup, Text, TextArea, Label } from "base_components/RootForm"

import { Root } from "./elements"

const PanelGeneralInfo = ({ groupName, groupDescription, onChange }) => (
  <Root title="General Information">
    <FormGroup>
      <Label htmlFor="group-name">Group Name</Label>
      <Text
        value={groupName}
        onChange={e => onChange(e.target.value, "groupName")}
        name="group-name"
        placeholder="Connect: Level 1"
      />
    </FormGroup>
    <FormGroup>
      <Label htmlFor="group-description">Group Description</Label>
      <TextArea
        value={groupDescription}
        onChange={e => onChange(e.target.value, "groupDescription")}
        name="group-description"
        placeholder="Connect: Level 1"
        row={4}
      />
    </FormGroup>
  </Root>
)

export default PanelGeneralInfo
