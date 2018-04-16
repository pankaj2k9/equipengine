import React, { Component } from 'react'
import { throttle } from 'lodash'
import { saveState } from 'localStorage'
// importing store and history
import store, { history } from 'store'
// components
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic/dist/src'
import AppContainer from './components/App'
import ThemeProvider from './components/ThemeProvider'

// subscribe event will fire every time the state is changing.
// we use throttle function from lodash, creates a throttled function that only invokes func
// at most once per every wait milliseconds
store.subscribe(
  throttle(() => {
    saveState({
      loggedUser: {
        user: store.getState().loggedUser.user
      }
    })
  }, 1000)
)

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BreadcrumbsProvider>
            <ThemeProvider>
              <AppContainer />
            </ThemeProvider>
          </BreadcrumbsProvider>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
