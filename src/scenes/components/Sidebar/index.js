import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { identical } from "ramda"
//
import LogoContainer from "base_components/LogoContainer"
import MainPanelLinks from "./components/MainPanelLinks"
import TeacherPanelLinks from "./components/TeacherPanelLinks"
import AdminPanelLinks from "./components/AdminPanelLinks"
import withStyle from "./withStyle"

const Sidebar = ({ isOpen, onCloseSidebar, accountType, className }) => {
  // when the isOpen props is true, add other classname on sidebar
  const sidebarClassnames = classNames("Sidebar", { isOpen })
  return (
    <div
      onClick={onCloseSidebar}
      className={`${sidebarClassnames} ${className}`}
    >
      <div className="Sidebar__inner">
        <LogoContainer />
        <div className="Sidebar__body">
          >
          {(identical(accountType, "Student") ||
            identical(accountType, "Teacher")) && (
            <MainPanelLinks accountType={accountType} />
          )}
          {identical(accountType, "Teacher") && <TeacherPanelLinks />}
          {identical(accountType, "Admin") && <AdminPanelLinks />}
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  onCloseSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  accountType: PropTypes.string.isRequired,
  isBrowseGroupPath: PropTypes.bool.isRequired
}

export default withStyle(Sidebar)
