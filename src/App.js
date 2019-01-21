import React, { Component } from "react";
import "./App.css";
import Searched from "./Searched.js";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h2>Toronto Waste Lookup</h2>
        </div>

        <Searched searchedTerm />
      </div>
    );
  }
}

export default App;
