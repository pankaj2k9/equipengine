import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';

import Routes from './Routes';
import SidebarTransition from 'base_components/SidebarTransition';
import Main from 'base_components/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <BreadcrumbsProvider>
          <div>
            <SidebarTransition />
            <Main>
              <Routes />
            </Main>
          </div>
        </BreadcrumbsProvider>
      </Router>
    );
  }
}

export default App;
