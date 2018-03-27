import React from 'react'
// assets
import LinkButton from 'base_components/LinkButton'
import bannerImg from '../../banner.svg'
import mastheadHomeStyles, { SectionFlex } from './styles'

const MastheadHome = mastheadHomeStyles(({className}) => (
  <SectionFlex
    className={className}
    flexDirection='column'
    alignItems='center'
  >
    <h2>A clean and simple learning management system for churches and ministries</h2>
    <LinkButton text='Get Started' url='/get-started' />
    <img alt='Banner img' src={bannerImg} />
  </SectionFlex>
))

export default MastheadHome
