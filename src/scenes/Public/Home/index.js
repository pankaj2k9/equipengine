import React from 'react'
import css from 'utils/css'
// components
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
// assets
import logoImg from 'resources/images/logo.svg'
import { defaultFlexStyles } from 'base_components/ContainerFlex'

/**
 * -------------------------------------
 * Modal new actions
 * @see ModalBody
 * -------------------------------------
 */
const homeStyles = css`
  height: 715px;
  background-color: #2F3036;
`
const Home = homeStyles(({className}) => (
  <div className={className}>
    <NavbarHome />
  </div>
))

export default Home

/**
 * -------------------------------------
 * NavbarHome
 * @see Home
 * -------------------------------------
 */
const Logo = defaultFlexStyles(Link)

const navbarHomeStyles = css`
  background-image: none;
  background-color: transparent;
  border-radius: 0;

  .navbar-brand {
    align-items: center;
  }

  .navbar-nav:first-child {
    margin-bottom: 0;
  }

  .navbar-nav:last-child {
    margin-top: 0;
  }

  @media screen and (min-width: 768px) {
    border: 0;
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
        <NavItem eventKey={1} href='#'>
          Features
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href='#'>
          Help
        </NavItem>
        <NavItem eventKey={2} href='#'>
          Login
        </NavItem>
        <NavItem eventKey={2} href='#'>
          Signup
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
)
