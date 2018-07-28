import React from "react"

import Popover from "base_components/Popover"

import Menu from "../Menu"
import Link from "../Link"

import { LinkWithPopover } from "./elements"

// TODO try to check if teacher doesn't need group-id
const TeacherPanelLinks = ({ groupId }) => (
  <div className="Sidebar__body__otherPages">
    <Menu>
      <Link
        text="Groups Activity"
        url={`/secure/groups/${groupId}/teacher/groups-activity`}
      />
      <LinkWithPopover>
        <Link
          text="Submissions Activity"
          url={`/secure/groups/${groupId}/teacher/submissions-activity`}
        />
        <Popover dataCount={10} />
      </LinkWithPopover>
      <Link
        text="User Manager"
        url={`/secure/groups/${groupId}/teacher/user-manager`}
      />
    </Menu>
  </div>
)

export default TeacherPanelLinks
