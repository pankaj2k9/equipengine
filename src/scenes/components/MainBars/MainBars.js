import React from 'react'
import PropTypes from 'prop-types'
import { identical } from 'ramda'
//
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import toggleSidebar from './hoc/toggleSidebar'

const MainBars = ({
  openSidebar,
  closeSidebar,
  isOpen,
  accountType,
  location
}) => {
  // browse group path
  const browseGroupPath = '/secure/browse-groups'
  return (
    <div>
      <Navbar onOpenSidebar={openSidebar} accountType={accountType} />
      <Sidebar
        isOpen={isOpen}
        onCloseSidebar={closeSidebar}
        accountType={accountType}
        pathname={location.pathname}
        isBrowseGroupPath={identical(location.pathname, browseGroupPath)}
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
