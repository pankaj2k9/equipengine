import React from "react"
import PropTypes from "prop-types"

import DropdownGroups from "../DropdownGroups"
import Menu from "../Menu"
import Link from "../Link"

const MainPanelLinks = ({ groupId }) => (
  <div className="Sidebar__body__mainPages">
    <DropdownGroups groupId={groupId} />
    <Menu>
      <Link text="Dashboard" url={`/secure/groups/${groupId}/dashboard`} />
      <Link isStrict text="Courses" url={`/secure/groups/${groupId}/courses`} />
      <Link text="Files" url={`/secure/groups/${groupId}/files`} />
      <Link text="People" url={`/secure/groups/${groupId}/people`} />
    </Menu>
  </div>
)

MainPanelLinks.propTypes = {
  accountType: PropTypes.string.isRequired
}

export default MainPanelLinks
