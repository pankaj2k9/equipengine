import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

import withStyleButton from '../withStyleButton';
const Dropdown = withStyleButton(DropdownButton);

const SearchbarDropdown = ({ title }) => (
  <ButtonToolbar>
    <Dropdown title={title} id="dropdown-size-medium">
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3">Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </Dropdown>
  </ButtonToolbar>
);

SearchbarDropdown.propTypes = {
  title: PropTypes.string.isRequired
};

export default SearchbarDropdown;
