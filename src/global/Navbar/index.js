import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
//
import ButtonTriggerSidebar from "./ButtonTriggerSidebar"
import features from "features"
import Notification from "./Notification"
import SiteListLinkHorizontal from "./SiteListLinkHorizontal"
import "./styles.css"

const Navbar = ({ onOpenSidebar, accountType }) => (
  <nav className="Navbar">
    <ButtonTriggerSidebar onOpenSidebar={onOpenSidebar} />
    <div className="SiteHorizontal">
      <SiteListLinkHorizontal accountType={accountType} />
    </div>
    <Notification />
  </nav>
)

Navbar.propTypes = {
  onOpenSidebar: PropTypes.func.isRequired,
  accountType: PropTypes.string.isRequired
}

const mapState = () =>
  createStructuredSelector({
    accountType: features.login.selectors.selectCurrentUserRole()
  })

export default connect(mapState)(Navbar)
