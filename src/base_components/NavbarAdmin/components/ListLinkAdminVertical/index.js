import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LinkNavbarAdmin from '../LinkNavbarAdmin';

const ListLinkVertical = styled.ul`
  margin-top: 0.8em;
  display: ${props => (props.isOpenPanel ? 'block' : 'none')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const ListLinkNavbarAdminVertical = ({ isOpenPanel }) => (
  <ListLinkVertical isOpenPanel={isOpenPanel}>
    <li>
      <LinkNavbarAdmin activeClassName="active" to="/admin/group-manager">
        Group Manager
      </LinkNavbarAdmin>
    </li>
    <li>
      <LinkNavbarAdmin activeClassName="active" to="/admin/course-create">
        Course Creator
      </LinkNavbarAdmin>
    </li>
    <li>
      <LinkNavbarAdmin activeClassName="active" to="/admin/user-manager">
        User Manager
      </LinkNavbarAdmin>
    </li>
    <li>
      <LinkNavbarAdmin
        activeClassName="active"
        to="/admin/organisation-settings"
      >
        Organisation Settings
      </LinkNavbarAdmin>
    </li>
  </ListLinkVertical>
);

ListLinkNavbarAdminVertical.propTypes = {
  isOpenPanel: PropTypes.bool.isRequired
};

export default ListLinkNavbarAdminVertical;
