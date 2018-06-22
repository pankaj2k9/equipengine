import React from 'react'
import styled from 'styled-components'
//
import ContainerFlex from 'base_components/ContainerFlex'

const HeaderSettings = styled(({ className }) => (
  <ContainerFlex isAlignCenter isSpaceBetween className={className}>
    <h4>Account Settings</h4>
  </ContainerFlex>
))`
  h4 {
    margin-top: 0;
    font-weight: 400;
    color: #80808b;
  }
`

export default HeaderSettings
