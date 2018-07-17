import React from "react"
// resources
import { Navbar } from "react-bootstrap"
import navbarHeaderHomeStyles, {
  Logo,
  Nav,
  NavLink,
  LinkLogin,
  LinkSignup
} from "./styles"
import logoImg from "resources/images/logo.svg"

/**
 * -------------------------------------
 * NavbarHeaderHome
 * @see Home
 * -------------------------------------
 */
const NavbarHeaderHome = navbarHeaderHomeStyles(({ className }) => (
  <Navbar inverse collapseOnSelect className={className}>
    <Navbar.Header>
      <Navbar.Brand>
        <Logo to="/">
          <img alt="logo img" src={logoImg} />
          EquipEngine
        </Logo>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <li>
          <NavLink to="/features">Features</NavLink>
        </li>
      </Nav>
      <Nav>
        <li>
          <NavLink activeClassName="active" to="/help">
            Help
          </NavLink>
        </li>
        <li>
          <LinkLogin activeClassName="active" to="/login">
            Login
          </LinkLogin>
        </li>
        <li>
          <LinkSignup activeClassName="active" to="/signup">
            Signup
          </LinkSignup>
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
))

export default NavbarHeaderHome
