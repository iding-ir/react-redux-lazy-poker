import React, { Component } from "react";

import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-header"></header>

        <div className="app-controls"></div>

        <div className="app-ranking"></div>

        <div className="app-deck"></div>

        <div className="app-players"></div>
      </div>
    );
  }
}

export default App;
