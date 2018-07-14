import React from "react"

import { NumberInput } from "base_components/RootForm"

import { Root, FormGroupUser, Label } from "./elements"

const PanelUsers = ({ groupSizeLimit, onChange }) => (
  <Root title="Users">
    <FormGroupUser>
      <Label>Group Size Limit</Label>
      <NumberInput
        value={groupSizeLimit}
        onChange={v => onChange(v, "groupSizeLimit")}
        defaultValue={0}
        min={0}
        max={5000}
      />
    </FormGroupUser>
  </Root>
)

export default PanelUsers
