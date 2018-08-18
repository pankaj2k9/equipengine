import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const RoleUser = styled(({ className, roleUser }) => (
  <div className={className}>
    <span>{roleUser}</span>
  </div>
))`
  display: inline-block;

  margin: 0 auto;
  padding: 0 0.4em;
  height: 20px;
  width: fit-content;

  background-color: #757575;
  border-radius: 2px;

  line-height: 1;

  span {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 12px;

    line-height: 20px;
  }
`

RoleUser.propTypes = {
  roleUser: PropTypes.string.isRequired
}

export default RoleUser
