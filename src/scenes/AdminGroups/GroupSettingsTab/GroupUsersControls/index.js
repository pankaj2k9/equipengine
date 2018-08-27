import React from "react"

import { NumberInput } from "base_components/RootForm"

import { Root, UserFormGroup, Label } from "./elements"

const GroupUsersControls = ({ userLimit, onUserLimitChange }) => (
  <Root title="Users">
    <UserFormGroup>
      <Label>Group Size Limit</Label>
      <NumberInput
        id="user_limit"
        defaultValue={0}
        max={5000}
        min={0}
        onChange={onUserLimitChange}
        value={userLimit}
      />
    </UserFormGroup>
  </Root>
)

export default GroupUsersControls
