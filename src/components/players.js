import React from "react";

import "./players.css";
import Player from "./player";

const Players = (props) => {
  const {
    cards,
    players,
    addPlayer,
    removePlayer,
    changeName,
    checkName,
  } = props;

  return (
    <div className="players">
      <div className="players-container">
        {players.map((player, key) => (
          <Player
            key={key}
            hand={cards.players[player.id]}
            player={player}
            removePlayer={removePlayer}
            changeName={changeName}
            checkName={checkName}
          />
        ))}
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
};

export default Players;
