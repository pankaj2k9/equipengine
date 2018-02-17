import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ButtonLogout from '../ButtonLogout';

const PopoverProfileContent = ({ removeLoggedUser }) => (
  <ul>
    <li>
      <Link to="'/account">Your Account</Link>
    </li>
    <li>
      <Link to="'/settings">Settings</Link>
    </li>
    <ButtonLogout handlerClick={removeLoggedUser} />
  </ul>
);

PopoverProfileContent.propTypes = {
  removeLoggedUser: PropTypes.func.isRequired
};

export default PopoverProfileContent;
