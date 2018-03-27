import React from 'react'
import css from 'utils/css'
// assets
import LinkButton from 'base_components/LinkButton'
import { defaultFlexStyles } from 'base_components/ContainerFlex'
import bannerImg from '../../banner.svg'

const mastheadHomeStyles = css`
  h2, img {
    max-width: 720px;
    width: 100%;
  }

  h2 {
    color: #ffffff;
    font-family: "Avenir Next", sans-serif;
    font-weight: 800;
    font-size: 1.6rem;
    text-align: center;
    margin-top: 1em;
  }

  img {
    object-fit: cover;
    margin-top: 1.7em;
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 2rem;
      margin-top: 4em;
      line-height: 1.4;
    }

    a {
      padding: 0.9em 0;
      font-size: 1.1rem;
      width: 173px;
    }
  }
`

// create section using defaultFlexStyles
const SectionFlex = defaultFlexStyles('section')

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
