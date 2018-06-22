import React from 'react'
import styled from 'styled-components'
//
import HeaderSettings from './components/HeaderSettings'

/**
   TODO:
   - Add components to Body.
 */

const ContainerSettings = styled.section`
  width: 80%;
  margin: 3em auto;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

const Settings = () => (
  <ContainerSettings>
    <HeaderSettings />
  </ContainerSettings>
)

export default Settings
