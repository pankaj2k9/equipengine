import React from "react"
import PropTypes from "prop-types"
import { identical } from "ramda"
//
import { STUDENT_ROLE } from "services/Auth"
import DropdownGroups from "../DropdownGroups"
import Menu from "../Menu"
import Link from "../Link"

const isStudentType = type => identical(type, STUDENT_ROLE)

const MainPanelLinks = ({ groupId, accountType }) => (
  <div className="Sidebar__body__mainPages">
    <DropdownGroups groupId={groupId} />
    <Menu>
      <Link text="Dashboard" url={`/secure/${groupId}/dashboard`} />
      <Link isStrict text="Courses" url={`/secure/${groupId}/courses`} />
      <Link
        text="Files"
        url={
          isStudentType(accountType)
            ? `/secure/${groupId}/files`
            : `/secure/${groupId}/teacher/files`
        }
      />
      {isStudentType(accountType) && (
        <Link text="People" url={`/secure/${groupId}/people`} />
      )}
    </Menu>
  </div>
)

MainPanelLinks.propTypes = {
  accountType: PropTypes.string.isRequired
}

export default MainPanelLinks
