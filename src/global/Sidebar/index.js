import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { compose } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { identical } from "ramda"
import { withRouter } from "react-router-dom"
//
import { ADMIN_ROLE, STUDENT_ROLE, TEACHER_ROLE } from "services/constants"
import AdminPanelLinks from "./AdminPanelLinks"
import features from "features"
import LogoContainer from "base_components/LogoContainer"
import MainPanelLinks from "./MainPanelLinks"
import TeacherPanelLinks from "./TeacherPanelLinks"
import withStyle from "./withStyle"
import { extractGroupId } from "utils/urlUrils"

const Sidebar = ({
  className,
  accountType,
  isOpen,
  location,
  onCloseSidebar
}) => {
  // when the isOpen props is true, add other classnames on sidebar
  const sidebarClassnames = classNames("Sidebar", { isOpen })
  const groupId = extractGroupId(location.pathname)
  return (
    <div
      onClick={onCloseSidebar}
      className={`${sidebarClassnames} ${className}`}
    >
      <div className="Sidebar__inner">
        <LogoContainer />
        <div className="Sidebar__body">
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

const mapState = () =>
  createStructuredSelector({
    accountType: features.login.selectors.selectCurrentUserRole()
  })

export default compose(
  component => connect(mapState)(component),
  withRouter,
  withStyle
)(Sidebar)
