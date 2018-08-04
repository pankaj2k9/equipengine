import React from "react"

import Menu from "../Menu"
import Link from "../Link"

import { LinkWithBadge } from "./elements"

// TODO try to check if teacher doesn't need group-id
const TeacherPanelLinks = ({ groupId }) => (
  <div className="Sidebar__body__otherPages">
    <Menu>
      <Link
        text="Groups Activity"
        url={`/secure/groups/${groupId}/teacher/groups-activity`}
      />
      <LinkWithBadge>
        <Link
          text="Submissions Activity"
          url={`/secure/groups/${groupId}/teacher/submissions-activity`}
        />
        <span className="link-badge">10</span>
      </LinkWithBadge>
      <Link
        text="User Manager"
        url={`/secure/groups/${groupId}/teacher/user-manager`}
      />
    </Menu>
  </div>
)

export default TeacherPanelLinks
