import React from 'react'
// assets
import MastheadHeaderHome from './components/MastheadHeaderHome'
import NavbarHeaderHome from './components/NavbarHeaderHome'
import homeStyles, { headerHomeStyles, mainHomeStyles } from './styles'

/**
 * -------------------------------------
 * Home
 * @see HeaderHome
 * -------------------------------------
 */
const Home = homeStyles(({className}) => (
  <div className={className}>
    <HeaderHome />
    <MainHome />
  </div>
))

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

/**
 * -------------------------------------
 * MainHome
 * @see Home
 * -------------------------------------
 */
const MainHome = mainHomeStyles(({className}) => (
  <main className={className}>
    <section>
      <h3>Why EquipEngine?</h3>
    </section>
  </main>
))
