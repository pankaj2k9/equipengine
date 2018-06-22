import React from 'react'
import styled from 'styled-components'
//
import HeaderActivity from './components/HeaderActivity'

/**
   TODO:
   - Add components to Body.
 */

const ContainerActivity = styled.section`
  width: 80%;
  margin: 3em auto;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

const Activity = () => (
  <ContainerActivity>
    <HeaderActivity />
  </ContainerActivity>
)

export default Activity
