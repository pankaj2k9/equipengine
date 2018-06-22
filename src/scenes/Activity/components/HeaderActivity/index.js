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
`

export default HeaderActivity
