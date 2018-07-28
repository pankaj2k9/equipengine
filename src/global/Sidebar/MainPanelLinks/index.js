import React from "react"
import PropTypes from "prop-types"
import { identical } from "ramda"
//
import { STUDENT_ROLE } from "services/constants"
import DropdownGroups from "../DropdownGroups"
import Menu from "../Menu"
import Link from "../Link"

const isStudentType = type => identical(type, STUDENT_ROLE)

const MainPanelLinks = ({ groupId, accountType }) => (
  <div className="Sidebar__body__mainPages">
    <DropdownGroups groupId={groupId} />
    <Menu>
      <Link text="Dashboard" url={`/secure/groups/${groupId}/dashboard`} />
      <Link isStrict text="Courses" url={`/secure/groups/${groupId}/courses`} />
      <Link
        text="Files"
        url={
          isStudentType(accountType)
            ? `/secure/groups/${groupId}/files`
            : `/secure/groups/${groupId}/teacher/files`
        }
      />
      {isStudentType(accountType) && (
        <Link text="People" url={`/secure/groups/${groupId}/people`} />
      )}
    </Menu>
  </div>
)

MainPanelLinks.propTypes = {
  accountType: PropTypes.string.isRequired
}

export default MainPanelLinks
