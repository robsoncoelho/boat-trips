import React, { Component } from "react";
import "./App.scss";

import Header from "../components/header";
import Date from "../components/date";
import Results from "../components/results";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Date />
        <Results />
      </div>
    );
  }
}

export default App;
