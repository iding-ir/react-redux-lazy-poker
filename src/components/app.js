import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import "./app.css";
import Navbar from "./navbar";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <Navbar />
        </header>

        <div className="app-controls"></div>

        <div className="app-ranking"></div>

        <div className="app-deck"></div>

        <div className="app-players"></div>
      </div>
    );
  }
}

export default App;
