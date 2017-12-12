import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import logo from 'resources/images/logo.svg';
import IconBurger from 'react-icons/lib/fa/align-justify';

// link
const LinkNavbarAdmin = styled(NavLink)`
  color: #ffffff;
  text-transform: uppercase;
  padding: 0.7em 2%;
  display: block;

  &.active {
    background: rgba(70, 70, 70, 0.82);
    color: #0e90e0;
  }
`;

const ListLink = styled.ul`
  margin-top: 0.8em;
`;

const ListLinkNavbarAdmin = ({ className }) => (
  <ListLink className={className}>
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
  </ListLink>
);

const ContentNavbarAdmin = styled(({ className }) => (
  <div className={className}>
    <div>
      <Link to="/">
        <img alt="Logo" src={logo} />
      </Link>
      <ListLinkNavbarAdmin />
    </div>
    <span>Main Site</span>
    <button>
      <IconBurger />
    </button>
  </div>
))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;

  > div:first-child {
    ul {
      display: none;
    }
  }

  > span {
    display: none;
  }

  > button {
    color: #ffffff;
    font-size: 1.6rem;
    padding: 0;
  }
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #2a2d2f;
  padding: 2% 0;
`;

const NavbarAdmin = () => (
  <Navbar>
    <ContentNavbarAdmin />
    <ListLinkNavbarAdmin />
  </Navbar>
);

export default NavbarAdmin;
