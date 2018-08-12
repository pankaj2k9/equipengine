import React from "react"
import styled from "styled-components"

const Header = ({ className, title }) => <h5 className={className}>{title}</h5>

export default styled(Header)`
  display: flex;
  align-items: center;

  font-weight: 800;
  font-size: 1.1rem;
  color: #000000;
`
