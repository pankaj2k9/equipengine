import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

import withStyleButton from '../withStyleButton';
import './styles.css';
const Dropdown = withStyleButton(DropdownButton);

const Toolbar = styled(ButtonToolbar)`
  margin-left: 0;
  width: 35%;
`;

const SearchbarDropdown = ({ title }) => (
  <Toolbar className="SearchbarDropdown">
    <Dropdown title={title} id="dropdown-size-medium">
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3">Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </Dropdown>
  </Toolbar>
);

SearchbarDropdown.propTypes = {
  title: PropTypes.string.isRequired
};

export default SearchbarDropdown;
