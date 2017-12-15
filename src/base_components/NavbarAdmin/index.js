import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import withCollapsiblePanel from 'hoc/withCollapsiblePanel';

import logo from 'resources/images/logo.svg';
import IconBurger from 'react-icons/lib/fa/align-justify';
import IconArrowBack from 'react-icons/lib/md/arrow-back';

// link
const LinkNavbarAdmin = styled(NavLink)`
  color: #ffffff;
  text-transform: uppercase;
  padding: 0.7em 2%;
  display: block;
  transition: all 300ms ease-in;

  &:hover {
    color: #0e90e0;
  }

  &.active {
    background: rgba(70, 70, 70, 0.82);
    color: #0e90e0;
  }

  @media screen and (min-width: 768px) {
    font-size: 0.78rem;

    &.active {
      background: none;
    }
  }
`;

// List
const ListLinkHorizontal = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
`;

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

const ListLinkNavbarAdminHorizontal = ({ className }) => (
  <ListLinkHorizontal>
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
  </ListLinkHorizontal>
);

// Content navbar admin
const ContentNavbarAdmin = styled(({ className, onToggle }) => (
  <div className={className}>
    <div>
      <Link to="/">
        <img alt="Logo" src={logo} />
      </Link>
      <ListLinkNavbarAdminHorizontal />
    </div>
    <Link to="/">
      <span>
        <IconArrowBack />
      </span>
      Main Site
    </Link>
    <button onClick={onToggle}>
      <IconBurger />
    </button>
  </div>
))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;

  > a {
    display: none;
    color: #9fa6ad;
    font-weight: 800;
    font-size: 0.78rem;
    text-transform: uppercase;
    transition: all 300ms ease-in;

    &:hover {
      color: #0e90e0;
    }

    span {
      font-size: 1rem;
      margin-right: 0.3em;
    }
  }

  > button {
    color: #ffffff;
    font-size: 1.6rem;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    padding: 0;

    > div:first-child {
      display: flex;
      width: 57%;
      align-items: center;
    }

    > a {
      display: block;
    }

    > button {
      display: none;
    }
  }
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #2a2d2f;
  padding: 2% 0;

  @media screen and (min-width: 768px) {
    padding: 14px 35px;
  }
`;

const NavbarAdmin = ({ onToggle, isOpenPanel }) => (
  <Navbar>
    <ContentNavbarAdmin onToggle={onToggle} />
    <ListLinkNavbarAdminVertical isOpenPanel={isOpenPanel} />
  </Navbar>
);

NavbarAdmin.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOpenPanel: PropTypes.bool.isRequired
};

export default withCollapsiblePanel(NavbarAdmin);
