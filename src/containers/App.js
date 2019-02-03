import React, { Component } from 'react';
import './App.scss';

import Header from '../components/header';
import Date from '../components/date';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Date />
      </div>
    );
  }
}

export default App;
