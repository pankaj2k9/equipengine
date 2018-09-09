import React from "react"

import DropdownGroup from "./DropdownGroup"
import AccountGroup from "./AccountGroup"
import MessengerAccessGroup from "./MessengerAccessGroup"

import { Root } from "./elements"
import { TEACHER_ROLE } from "services/constants"

const PanelAccountRole = ({
  role,
  activityStudents,
  messengerAccess,
  fileControlPrivileges,
  onChange,
  handleDropdownChange,
  handleActivityStudentsChange,
  students
}) => (
  <Root title="Account Role">
    <DropdownGroup role={role} onChange={handleDropdownChange} />
    {role === TEACHER_ROLE && (
      <AccountGroup
        fileControlPrivileges={fileControlPrivileges}
        onChange={onChange}
        handleActivityStudentsChange={handleActivityStudentsChange}
        activityStudents={activityStudents}
        students={students}
      />
    )}
    <MessengerAccessGroup
      messengerAccess={messengerAccess}
      onChange={onChange}
    />
  </Root>
)

export default PanelAccountRole
