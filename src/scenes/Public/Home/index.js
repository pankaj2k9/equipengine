import React from 'react'
import { createProvider, consume } from 'storext'
// assets
import MastheadHeaderHome from './components/MastheadHeaderHome'
import NavbarHeaderHome from './components/NavbarHeaderHome'
import homeStyles, { headerHomeStyles, mainHomeStyles } from './styles'

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

// creating Counter store
const counterStore = {
  state: {
    count: 0
  },
  updaters: {
    increment ({count}, state) {
      return state.update('count', (value) => value + count)
    },
    decrement ({count}, state) {
      return state.update('count', (value) => value - count)
    }
  }
}

const { Provider } = createProvider({counter: counterStore}, {isLoggerOn: true})

const Counter = ({count, handlers}) => (
  <div>
    <div><span>{count}</span></div>
    <button onClick={handlers.decrement}>decrement</button>
    <button onClick={handlers.increment}>increment</button>
  </div>
)

const mapState = (state) => ({
  count: state.counter.get('count')
})

const mapHandlers = (commit) => ({
  increment () {
    commit({
      type: 'increment',
      payload: {count: 10}
    })
  },
  decrement () {
    commit({
      type: 'decrement',
      payload: {count: 10}
    })
  }
})

const ContainerCounter = consume(mapState, mapHandlers)(Counter)

/**
 * -------------------------------------
 * Home
 * @see HeaderHome
 * -------------------------------------
 */
const Home = homeStyles(({className}) => (
  <Provider>
    <div className={className}>
      <HeaderHome />
      <MainHome />
      <ContainerCounter />
    </div>
  </Provider>
))

export default Home
