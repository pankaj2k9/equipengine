import React from "react"
import styled from "styled-components"

export default styled(({ className, ...rest }) => (
  <button className={className} {...rest} />
))`
  background: none;
  border: 0;
  color: #9fa6ad;
  display: block;
  transition: all 300ms ease-in;
  padding-top: 5px;
  padding-left: 30px;

  &:hover {
    color: rgb(14, 144, 224);
  }
`
