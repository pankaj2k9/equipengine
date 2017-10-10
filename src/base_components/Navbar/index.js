import React from 'react';

import LogoContainer from 'base_components/LogoContainer';
import Notification from './components/Notification';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './styles.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <LogoContainer />
      <Notification />
    </div>
  );
};

export default Navbar;
