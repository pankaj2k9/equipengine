import React from 'react';
import PropTypes from 'prop-types';
//
import ListSettingsLink from './components/ListSettingsLink';
import ButtonTriggerSidebar from './components/ButtonTriggerSidebar';
import Notification from './components/Notification';
import './styles.css';

const Navbar = ({ onOpenSidebar }) => {
  return (
    <nav className="Navbar">
      <ButtonTriggerSidebar onOpenSidebar={onOpenSidebar} />
      <ListSettingsLink />
      <Notification />
    </nav>
  );
};

Navbar.propTypes = {
  onOpenSidebar: PropTypes.func.isRequired
};

export default Navbar;
