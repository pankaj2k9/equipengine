import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PopoverProfileContent = styled(({ className, removeLoggedUser }) => (
  <ul className={className}>
    <li>
      <Link to="'/account">Your Account</Link>
    </li>
    <li>
      <Link to="'/settings">Settings</Link>
    </li>
    <li>
      <button onClick={removeLoggedUser}>Logout</button>
    </li>
  </ul>
))`
  padding: 1em 1.3em;

  li {
    width: 100px;
    margin-bottom: 0.9em;

    &:first-child a {
      text-transform: uppercase;
      color: #9fa6ad;
      font-weight: 800;
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

    a,
    button {
      font-family: 'Karla', 'Helvetica Neaue', sans-serif;
      color: #000000;
      display: block;

      &:hover {
        color: rgb(14, 144, 224);
      }
    }
  }
`

PopoverProfileContent.propTypes = {
  removeLoggedUser: PropTypes.func.isRequired
}

export default PopoverProfileContent
