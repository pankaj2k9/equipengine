import React from 'react';
import PropTypes from 'prop-types';

import ButtonTriggerSidebar from './components/ButtonTriggerSidebar';
import Notification from './components/Notification';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './styles.css';

const Navbar = ({ isOpen, onOpenSidebar }) => {
  return (
    <nav className="Navbar">
      <ButtonTriggerSidebar onOpenSidebar={onOpenSidebar} />
      <Notification />
    </nav>
  );
};

Navbar.propTypes = {
  onOpenSidebar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default Navbar;
