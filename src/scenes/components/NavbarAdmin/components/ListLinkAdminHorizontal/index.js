import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LinkHorizontal } from '../LinkNavbarAdmin';

const ListLinkHorizontal = styled.ul`
  margin-top: 0.8em;
  display: ${props => (props.isOpenPanel ? 'block' : 'none')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ListLinkAdminHorizontal = ({ isOpenPanel, onToggle }) => (
  <ListLinkHorizontal isOpenPanel={isOpenPanel}>
    <li onClick={onToggle}>
      <LinkHorizontal activeClassName="active" to="/admin/group-manager">
        Group Manager
      </LinkHorizontal>
    </li>
    <li onClick={onToggle}>
      <LinkHorizontal activeClassName="active" to="/admin/course-creator">
        Course Creator
      </LinkHorizontal>
    </li>
    <li onClick={onToggle}>
      <LinkHorizontal activeClassName="active" to="/admin/user-manager">
        User Manager
      </LinkHorizontal>
    </li>
    <li onClick={onToggle}>
      <LinkHorizontal
        activeClassName="active"
        to="/admin/organisation-settings"
      >
        Organisation Settings
      </LinkHorizontal>
    </li>
  </ListLinkHorizontal>
);

ListLinkAdminHorizontal.propTypes = {
  isOpenPanel: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default ListLinkAdminHorizontal;
