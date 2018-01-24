import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic/dist/src';

import App from './components/App';

class Root extends Component {
  render() {
    return (
      <Router>
        <BreadcrumbsProvider>
          <App
            loggedUser={{
              type: 'Student'
            }}
          />
        </BreadcrumbsProvider>
      </Router>
    );
  }
}

export default Root;
