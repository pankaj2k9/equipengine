import React from "react"
import PropTypes from "prop-types"
//
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"
import toggleSidebar from "./hoc/toggleSidebar"

const MainBars = ({
  openSidebar,
  closeSidebar,
  isOpen,
  currentUserRole,
  location
}) => {
  return (
    <div>
      <Navbar onOpenSidebar={openSidebar} accountType={currentUserRole} />
      <Sidebar
        isOpen={isOpen}
        onCloseSidebar={closeSidebar}
        accountType={currentUserRole}
        pathname={location.pathname}
      />
    </div>
  )
}

MainBars.propTypes = {
  openSidebar: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  accountType: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
}

MainBars.defaultProps = {
  isOpen: false
}

export default toggleSidebar(MainBars)
