import React from "react"

import { Label } from "base_components/RootForm"

import { Root, Dropdown } from "./elements"

import { getDropdownValue } from "utils/formFunctions"

const DropdownUserRole = ({ role, onChange }) => (
  <Root>
    <Label>Select user role</Label>
    <Dropdown
      placeholder="Role"
      name="role"
      value={role}
      onChange={value => onChange(getDropdownValue(value), "role")}
      options={[
        { label: "Teacher", value: "teacher" },
        { label: "Student", value: "student" }
      ]}
    />
  </Root>
)

export default DropdownUserRole
