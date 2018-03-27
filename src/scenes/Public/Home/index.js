import React, { Fragment } from 'react'
// assets
import MastheadHeaderHome from './components/MastheadHeaderHome'
import NavbarHeaderHome from './components/NavbarHeaderHome'
import { headerHomeStyles } from './styles'

/**
 * -------------------------------------
 * Home
 * @see HeaderHome
 * -------------------------------------
 */
const Home = () => (
  <Fragment>
    <HeaderHome />
    <main />
  </Fragment>
)

export default Home

/**
 * -------------------------------------
 * HeaderHome
 * @see Home
 * -------------------------------------
 */
const HeaderHome = headerHomeStyles(({className}) => (
  <header className={className}>
    <NavbarHeaderHome />
    <MastheadHeaderHome />
  </header>
))
