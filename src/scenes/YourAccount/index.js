import React from 'react'
import styled from 'styled-components'
//
import HeaderYourAccount from './components/HeaderYourAccount'

/**
   TODO:
   - Add components to Body.
 */

const ContainerYourAccount = styled.section`
  width: 80%;
  margin: 3em auto;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

const Settings = () => (
  <ContainerYourAccount>
    <HeaderYourAccount />
  </ContainerYourAccount>
)

export default Settings
