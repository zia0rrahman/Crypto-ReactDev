import React, { Component } from 'react';
import './App.css';
import Crypto from './Componetns/Crypto'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <h2>Hello Crypto ReactDev!</h2>
          </div>
          <Crypto />
      </div>
    );
  }
}

export default App;
