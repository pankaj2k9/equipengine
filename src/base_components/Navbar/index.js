import React from 'react';

import { ButtonToolbar, Button } from 'react-bootstrap';
import './styles.css';

const Navbar = () => {
  return (
    <ButtonToolbar>
      <Button href="#">Link</Button>
      <Button>Button</Button>
    </ButtonToolbar>
  );
};

export default Navbar;
