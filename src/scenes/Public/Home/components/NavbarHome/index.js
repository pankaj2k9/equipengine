import React from 'react'
import css from 'utils/css'
import { compose } from 'ramda'
//
import { Navbar } from 'react-bootstrap'
import { Link, NavLink as RootNavLink } from 'react-router-dom'
// assets
import logoImg from 'resources/images/logo.svg'
import { defaultFlexStyles } from 'base_components/ContainerFlex'
/**
 * -------------------------------------
 * NavbarHome
 * @see Home
 * -------------------------------------
 */
// Logo styles
const Logo = defaultFlexStyles(Link)

const navbarHomeStyles = css`
  background-image: none;
  background-color: transparent;
  border-radius: 0;

  .navbar-brand {
    font-family: 'Avenir Next', sans-serif;
    font-weight: 800;
    font-size: 18px;
    align-items: center;
    color: #ffffff;

    img {
      margin-right: 0.5em;
      height: 31px;
    }
  }

  .navbar-toggle {
    margin-right: 0;
  }

  .navbar-collapse {
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    border: 0;

    .container {
      display: flex;
      align-items: center;
      padding: 0;
      margin: 0;
      width: 100%;
    }

    .navbar-collapse.collapse {
      display: flex !important;
      position: relative;
      width: 100%;
    }

    .navbar-brand {
      a {
        font-size: 24px;
      }

      img {
        height: 40px;
        margin-right: 0.7em;
      }
    }
`
const NavbarHome = navbarHomeStyles(({className}) => (
  <Navbar inverse collapseOnSelect className={className}>
    <Navbar.Header>
      <Navbar.Brand>
        <Logo to='/'>
          <img alt='logo img' src={logoImg} />
          EquipEngine
        </Logo>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <li>
          <NavLink to='/features'>Features</NavLink>
        </li>
      </Nav>
      <Nav>
        <li>
          <NavLink activeClassName='active' to='/help'>Help</NavLink>
        </li>
        <li>
          <LinkLogin activeClassName='active' to='/login'>Login</LinkLogin>
        </li>
        <li>
          <LinkSignup activeClassName='active' to='/signup'>Signup</LinkSignup>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
))

export default NavbarHome

/**
 * -------------------------------------
 * NavLinks
 * -------------------------------------
 */
const navLinkStyles = css`
  color: #ffffff;
  text-transform: uppercase;
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
`

const NavLink = navLinkStyles(RootNavLink)

/**
 * -------------------------------------
 * Link Actions
 * -------------------------------------
 */
const linkActionStyles = css`
  @media screen and (min-width: 768px) {
    background-color: #8F8F8F;
    border-radius: 3px;
    padding: 0.5em 2.5em;

    &:hover {
      background-color: #565656;
      color: #ffffff;
    }
  }
`
const signupStyles = css`
  @media screen and (min-width: 768px) {
    background-color: #338FFC;

    &:hover {
      background-color: #125eb7;
      color: #ffffff;
    }
  }
`

// link login - action
const LinkLogin = compose(linkActionStyles, navLinkStyles)(RootNavLink)
// link signup - action
const LinkSignup = compose(signupStyles, linkActionStyles, navLinkStyles)(RootNavLink)

/**
 * -------------------------------------
 * Nav components
 * -------------------------------------
 */
const Nav = css`
  li {
    padding: 2% 4%;
    display: block;
  }

  @media screen and (min-width: 768px) {

    &:first-child {
      margin-left: 2.7em;
    }

    &:last-child {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;

      li:first-child {
        margin-right: 2.2em;
      }

      li:last-child {
        margin-left: 0.8em;
      }
    }

    li {
      padding: 0;
    }
  }
`('nav')
