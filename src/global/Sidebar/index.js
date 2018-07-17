import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { compose } from "recompose"
import { identical } from "ramda"
import { withRouter } from "react-router-dom"
//
import { ADMIN_ROLE, STUDENT_ROLE, TEACHER_ROLE } from "services/Auth"
import LogoContainer from "base_components/LogoContainer"
import MainPanelLinks from "./components/MainPanelLinks"
import TeacherPanelLinks from "./components/TeacherPanelLinks"
import AdminPanelLinks from "./components/AdminPanelLinks"
import withStyle from "./withStyle"

const Sidebar = ({ isOpen, onCloseSidebar, accountType, match, className }) => {
  // when the isOpen props is true, add other classname on sidebar
  const sidebarClassnames = classNames("Sidebar", { isOpen })
  const {
    params: { groupId }
  } = match
  return (
    <div
      onClick={onCloseSidebar}
      className={`${sidebarClassnames} ${className}`}
    >
      <div className="Sidebar__inner">
        <LogoContainer />
        <div className="Sidebar__body">
          >
          {(identical(accountType, STUDENT_ROLE) ||
            identical(accountType, TEACHER_ROLE)) && (
            <MainPanelLinks accountType={accountType} groupId={groupId} />
          )}
          {identical(accountType, TEACHER_ROLE) && (
            <TeacherPanelLinks groupId={groupId} />
          )}
          {identical(accountType, ADMIN_ROLE) && <AdminPanelLinks />}
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  onCloseSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  accountType: PropTypes.string.isRequired
}

export default compose(
  withRouter,
  withStyle
)(Sidebar)
