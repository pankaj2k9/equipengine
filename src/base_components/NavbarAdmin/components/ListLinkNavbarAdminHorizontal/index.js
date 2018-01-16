import React from 'react';
import styled from 'styled-components';

import LinkNavbarAdmin from '../LinkNavbarAdmin';

const ListLinkHorizontal = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
`;

const ListLinkNavbarAdminHorizontal = ({ className }) => (
  <ListLinkHorizontal>
    <li>
      <LinkNavbarAdmin activeClassName="active" to="/admin/group-manager">
        Group Manager
      </LinkNavbarAdmin>
    </li>
    <li>
      <LinkNavbarAdmin activeClassName="active" to="/admin/course-creator">
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
  </ListLinkHorizontal>
);

export default ListLinkNavbarAdminHorizontal;
