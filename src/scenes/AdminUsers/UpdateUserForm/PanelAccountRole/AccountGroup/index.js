import React from "react"

import WhiteArea from "base_components/WhiteArea"
import { Switch, Checkbox, Label } from "base_components/RootForm"

import { Root, P, ListItemRoot, PrivilegesLabel, Flex } from "./elements"

const AccountContainer = ({
  fileControlPrivileges,
  handleActivityStudentsChange,
  activityStudents,
  onChange,
  students = []
}) => (
  <Root>
    <P>
      Submissions teacher can see (if a person is not selected people will not
      show):
    </P>

    <WhiteArea>
      {students.map(student => (
        <ListItemRoot key={`student-${student.id}`}>
          <Checkbox
            id={`${student.id}`}
            checked={activityStudents.find(activity => activity === student.id)}
            name={`${student.id}`}
            onChange={handleActivityStudentsChange}
          />
          <Label htmlFor={`${student.id}`}>
            {student.first_name || ""} {student.last_name || ""}
          </Label>
        </ListItemRoot>
      ))}
    </WhiteArea>

    <Flex isSpaceBetween>
      <PrivilegesLabel>File Control Privileges</PrivilegesLabel>
      <Switch
        value={fileControlPrivileges}
        onChange={onChange}
        name="fileControlPrivileges"
      />
    </Flex>
  </Root>
)

export default AccountContainer
