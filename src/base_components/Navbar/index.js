import React from 'react';

import ButtonTriggerSidebar from './components/ButtonTriggerSidebar';
import Notification from './components/Notification';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ButtonTriggerSidebar />
      <Notification />
    </nav>
  );
};

export default Navbar;
