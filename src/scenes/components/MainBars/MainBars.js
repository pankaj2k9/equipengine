import React from 'react';
import PropTypes from 'prop-types';
//
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import toggleSidebar from './hoc/toggleSidebar';

const MainBars = ({ openSidebar, closeSidebar, isOpen, accountType }) => (
  <div>
    <Navbar onOpenSidebar={openSidebar} accountType={accountType} />
    <Sidebar
      isOpen={isOpen}
      onCloseSidebar={closeSidebar}
      accountType={accountType}
    />
  </div>
);

MainBars.propTypes = {
  openSidebar: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  accountType: PropTypes.string.isRequired
};

MainBars.defaultProps = {
  isOpen: false
};

export default toggleSidebar(MainBars);
