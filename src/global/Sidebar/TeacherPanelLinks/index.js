import React from "react"

import Menu from "../Menu"
import Link from "../Link"

// TODO try to check if teacher doesn't need group-id
const TeacherPanelLinks = ({ groupId }) => (
  <div className="Sidebar__body__otherPages">
    <Menu>
      <Link
        text="Groups Activity"
        url={`/secure/groups/${groupId}/teacher/groups-activity`}
      />
      <Link
        badge={10}
        text="Submissions Activity"
        url={`/secure/groups/${groupId}/teacher/submissions-activity`}
      />
      <Link
        text="User Manager"
        url={`/secure/groups/${groupId}/teacher/user-manager`}
      />
    </Menu>
  </div>
)

export default TeacherPanelLinks
