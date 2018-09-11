import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
     <Chart/>
      </div>
    );
  }
}

export default App;
