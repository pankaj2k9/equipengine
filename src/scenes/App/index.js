import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import SidebarTransition from 'base_components/SidebarTransition';
import Main from 'base_components/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <SidebarTransition />
          <Main>
            <Routes />
          </Main>
        </div>
      </Router>
    );
  }
}

export default App;
