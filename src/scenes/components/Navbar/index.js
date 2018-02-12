import React from 'react';
import PropTypes from 'prop-types';
import { identical } from 'ramda';
//
import ListSettingsLink from './components/ListSettingsLink';
import ButtonTriggerSidebar from './components/ButtonTriggerSidebar';
import Notification from './components/Notification';
import './styles.css';

const Navbar = ({ onOpenSidebar, accountType }) => {
  return (
    <nav className="Navbar">
      <ButtonTriggerSidebar onOpenSidebar={onOpenSidebar} />
      {identical(accountType, 'Teacher') && <ListSettingsLink />}
      <Notification />
    </nav>
  );
};

Navbar.propTypes = {
  onOpenSidebar: PropTypes.func.isRequired,
  accountType: PropTypes.string.isRequired
};

export default Navbar;
