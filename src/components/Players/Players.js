import React from "react";

import "./Players.scss";
import Player from "../Player/Player";
import { MAXIMUM_NUMBER_OF_PLAYERS } from "../../configs";

const Players = (props) => {
  const {
    cards,
    players,
    gameStarted,
    addPlayer,
    removePlayer,
    changeName,
    checkName,
  } = props;

  return (
    <div className="players">
      <div className="players-container">
        {Object.values(players).map((player, key) => (
          <Player
            key={key}
            hand={cards.players[player.id]}
            players={players}
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
          disabled={
            gameStarted ||
            Object.keys(players).length >= MAXIMUM_NUMBER_OF_PLAYERS
          }
        >
          <i className="material-icons left">add</i>
        </button>
      </div>
    </div>
  );
};

export default Players;
