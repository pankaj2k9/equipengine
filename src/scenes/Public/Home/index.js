import React from 'react'
import css from 'utils/css'
// components
import NavbarHome from './components/NavbarHome'

/**
 * -------------------------------------
 * Modal new actions
 * @see ModalBody
 * -------------------------------------
 */
const homeStyles = css`
  height: 715px;
  background-color: #2F3036;

  @media screen and (min-width: 768px) {
    padding: 14px 35px;
  }
`
const Home = homeStyles(({className}) => (
  <div className={className}>
    <NavbarHome />
  </div>
))

export default Home
