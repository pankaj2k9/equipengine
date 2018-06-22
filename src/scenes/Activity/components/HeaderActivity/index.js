import React from 'react'
import styled from 'styled-components'
//
import ContainerFlex from 'base_components/ContainerFlex'

const HeaderActivity = styled(({ className }) => (
  <ContainerFlex isAlignCenter isSpaceBetween className={className}>
    <h4>Activity</h4>
  </ContainerFlex>
))`
  h4 {
    margin-top: 0;
    font-weight: 400;
    color: #80808b;
  }

  button {
    background: none;
    border: 1px solid #b9b9b9;
    color: #80808b;
    padding: 4px 13px 4px 7px;
    position: relative;
    top: -3px;
    border-radius: 4px;
    transition: all 300ms ease-in;

    img {
      vertical-align: text-bottom;
      margin-right: 5px;
    }

    &:hover {
      border-color: #000000;
      color: #000000;
    }
  }
`

export default HeaderActivity
