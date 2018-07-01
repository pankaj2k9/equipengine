import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const RouteIconButton = styled(({ className, to, icon }) => (
  <Link className={className} to={to}>
    <img alt="icon-button" src={icon} />
  </Link>
))`
  img {
    width: ${props => props.width || "30px"};
  }
`

export default RouteIconButton
