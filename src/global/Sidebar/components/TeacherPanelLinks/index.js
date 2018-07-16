import React from "react"

import Popover from "base_components/Popover"

import Menu from "../Menu"
import Link from "../Link"

import { LinkWithPopover } from "../elements"

// this is for teacher panel links
const TeacherPanelLinks = () => (
  <div className="Sidebar__body__otherPages">
    <Menu>
      <Link text="Groups Activiy" url="/secure/teacher/groups-activity" />
      <LinkWithPopover>
        <Link
          text="Submissions Activity"
          url="/secure/teacher/submissions-activity"
        />
        <Popover dataCount={10} />
      </LinkWithPopover>
      <Link text="User Manager" url="/secure/teacher/user-manager" />
    </Menu>
  </div>
)

export default TeacherPanelLinks
