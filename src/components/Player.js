import React from "react";

import Card from "./Card";
import { defaultCard } from "../constants/game";
import {
  MINIMUM_NUMBER_OF_PLAYERS,
  NUMBER_OF_CARDS_PER_PLAYER,
} from "../configs";

const Player = (props) => {
  const { hand, players, player, removePlayer, changeName, checkName } = props;
  const { id, name, points } = player;

  return (
    <React.Fragment>
      <div className="players-player">
        <div className="players-title">
          <button
            className="players-remove btn red"
            onClick={() => {
              removePlayer(id);
            }}
            disabled={Object.keys(players).length <= MINIMUM_NUMBER_OF_PLAYERS}
          >
            <i className="material-icons">remove_circle_outline</i>
          </button>

          <input
            className="players-name"
            value={name}
            onChange={(event) => {
              changeName(id, event.target.value);
            }}
            onBlur={(event) => {
              checkName(id, event.target.value);
            }}
          />

          <span className="players-points badge blue new" data-badge-caption="">
            {points}
          </span>
        </div>

        <div className="players-cards">
          {hand.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

Player.defaultProps = {
  hand: Array(NUMBER_OF_CARDS_PER_PLAYER).fill(defaultCard),
};

export default Player;
