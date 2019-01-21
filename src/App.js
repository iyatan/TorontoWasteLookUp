import React, { Component } from "react";
import "./App.css";
import Searched from "./Searched.js";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h3>Toronto Waste Lookup</h3>
        </div>

        <Searched searchedTerm />
      </div>
    );
  }
}

export default App;
