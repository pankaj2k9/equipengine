import React from "react"
import styled from "styled-components"
import BackIconButton from "../BackIconButton"

export default styled(({ className }) => (
  <BackIconButton className={className} />
))`
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 55px;
  }
  margin: 0.5em;
`
