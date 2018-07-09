import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import BackIconButton from "base_components/BackIconButton"

const StyledLink = styled(Link)`
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 55px;
  }
  margin: 0.5em;
`

export default () => (
  <StyledLink to="/secure/home">
    <BackIconButton />
  </StyledLink>
)
