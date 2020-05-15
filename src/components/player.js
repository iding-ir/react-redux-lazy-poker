import React from "react";

import Card from "./card";

const Player = (props) => {
  let { player, removePlayer } = props;

  return (
    <React.Fragment>
      <div className="players-player">
        <div className="players-title">
          <button
            className="players-remove btn red"
            onClick={() => {
              removePlayer(player.id);
            }}
          >
            <i className="material-icons">remove_circle_outline</i>
          </button>

          <input className="players-name" value={player.name} />

          <span className="players-points badge blue new" data-badge-caption="">
            {player.points}
          </span>
        </div>

        <div className="players-cards">
          {/* {player.cards.map((card, index) => {
            return <Card key={index} card={card} />;
          })} */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Player;
