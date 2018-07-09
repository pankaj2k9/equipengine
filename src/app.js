import React, { Component } from "react"
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic/dist/src"
import { ConnectedRouter } from "react-router-redux"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import ToastrProvider from "react-redux-toastr"

// importing store and history
import store, { history, persistor } from "./store"
import Routes from "./routes"
import ThemeProvider from "./theme"

const App = () => (
  // Redux state management
  <Provider store={store}>
    {/* Localstorage saver */}
    <PersistGate loading={null} persistor={persistor}>
      {/* Redux router init */}
      <ConnectedRouter history={history}>
        {/* Simple url-breadcrumb */}
        <BreadcrumbsProvider>
          {/* Styled components theming */}
          <ThemeProvider>
            <div>
              {/* All the app routes/pages */}
              <Routes />
              {/* Nice success/error notification popups */}
              <ToastrProvider progressBar timeOut={3000} showCloseButton />
            </div>
          </ThemeProvider>
        </BreadcrumbsProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
)

export default App
