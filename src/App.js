import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './base_components/Navbar';

class App extends Component {
  render() {
    let a;
    return (
      <div className="App">
        <Navbar />
        {(a = 5)}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
