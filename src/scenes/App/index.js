import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navbar from 'base_components/Navbar';
import Sidebar from 'base_components/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}

export default App;
