import React from "react"
import { createProvider } from "storext"
// assets
import MastheadHeaderHome from "../MastheadHeaderHome"
import NavbarHeaderHome from "../NavbarHeaderHome"
import homeStyles, { headerHomeStyles, mainHomeStyles } from "./styles"

/**
 * -------------------------------------
 * HeaderHome
 * @see Home
 * -------------------------------------
 */
const HeaderHome = headerHomeStyles(({ className }) => (
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
const MainHome = mainHomeStyles(({ className }) => (
  <main className={className}>
    <section>
      <h3>Why EquipEngine?</h3>
    </section>
  </main>
))

const { Provider } = createProvider({ isLoggerOn: true })

/**
 * -------------------------------------
 * Home
 * @see HeaderHome
 * -------------------------------------
 */
const Home = homeStyles(({ className }) => (
  <Provider>
    <div className={className}>
      <HeaderHome />
      <MainHome />
    </div>
  </Provider>
))

export default Home
