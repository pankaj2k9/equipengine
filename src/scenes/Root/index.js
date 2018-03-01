import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic/dist/src'
import { throttle } from 'lodash'
import { saveState } from 'localStorage'
// importing store and history
import store, { history } from 'store'

import AppContainer from './components/App'

// subscribe event will fire every time the state is changing.
// we user throttle function from lodash, creates a throttled function that only invokes func
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
            <AppContainer />
          </BreadcrumbsProvider>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
