import React from "react"
import PropTypes from "prop-types"
import { identical } from "ramda"
//
import { STUDENT_ROLE } from "services/Auth"
import DropdownGroups from "../DropdownGroups"
import Menu from "../Menu"
import Link from "../Link"

const isStudentType = type => identical(type, STUDENT_ROLE)

const MainPanelLinks = ({ accountType }) => (
  <div className="Sidebar__body__mainPages">
    <DropdownGroups />
    <Menu>
      <Link text="Dashboard" url="/secure/dashboard" />
      <Link isStrict text="Courses" url="/secure/courses" />
      <Link
        text="Files"
        url={
          isStudentType(accountType) ? "/secure/files" : "/secure/teacher/files"
        }
      />
      {isStudentType(accountType) && (
        <Link text="People" url="/secure/people" />
      )}
    </Menu>
  </div>
)

MainPanelLinks.propTypes = {
  accountType: PropTypes.string.isRequired
}

export default MainPanelLinks
