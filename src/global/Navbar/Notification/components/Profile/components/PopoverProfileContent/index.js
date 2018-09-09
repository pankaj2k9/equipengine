import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"

const PopoverProfileContent = styled(({ className, onLogout }) => (
  <ul className={className}>
    <li>
      <Link to="/secure/settings">Your Account</Link>
    </li>
    <li>
      <Link to="/secure/settings">Settings</Link>
    </li>
    <li>
      <button onClick={onLogout}>Logout</button>
    </li>
  </ul>
))`
  padding: 1.3em;

  li {
    width: 100px;
    margin-bottom: 0.9em;

    a,
    button {
      font-family: "Avenir Next", "Helvetica Neau", "Open Sans", sans-serif;
      color: #000000;
      display: block;

      &:hover {
        color: rgb(14, 144, 224);
      }
    }

    &:first-child a {
      text-transform: uppercase;
      color: #9fa6ad;
      font-weight: 400;
      font-size: 11px;
    }

    &:last-child {
      margin-bottom: 0;

      button {
        background: none;
        border: 0;
        transition: all 300ms ease-in;
        padding: 0;
      }
    }
  }
`

PopoverProfileContent.propTypes = {
  onLogout: PropTypes.func.isRequired
}

export default PopoverProfileContent
