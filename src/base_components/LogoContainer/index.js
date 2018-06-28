import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from 'resources/images/logo.svg'
import { $textBoldColor } from 'shared/color.js'

const Img = styled.img`
  margin-right: 0.5em;
  height: 31px;

  @media screen and (min-width: 768px) {
    margin-right: 1em;
    height: 100%;
  }
`

const H1 = styled.h1`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 800;
  font-size: 18px;
  margin-bottom: 0;
  color: ${$textBoldColor};

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

const LogoContainer = ({ className }) => {
  return (
    <Link className={className} to='/secure/browse-groups'>
      <Img alt='Logo' src={Logo} />
      <H1 style={{ color: $textBoldColor }}>EquipEngine</H1>
    </Link>
  )
}

export default styled(LogoContainer)`
  display: flex;
  align-items: center;
  padding: 5% 5% 4% 5%;
  background-color: #fff;
  min-height: 59px;

  @media screen and (min-width: 768px) {
    padding: 9px 35px 9px 20px;
    margin-bottom: 0px;
  }
`
