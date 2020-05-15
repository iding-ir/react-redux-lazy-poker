import React, { Component } from "react";

import "./players.css";
import Player from "./player";

class Players extends Component {
  state = {};
  render() {
    let { players, addPlayer, removePlayer } = this.props;

    return (
      <div className="players">
        <div className="players-container">
          {players.map((player, key) => {
            return (
              <Player key={key} player={player} removePlayer={removePlayer} />
            );
          })}
        </div>

        <div className="players-add">
          <button
            id="players-add"
            className="waves-effect waves-light btn-large btn-floating pink"
            onClick={addPlayer}
          >
            <i className="material-icons left">add</i>
          </button>
        </div>
      </div>
    );
  }
}

export default Players;
