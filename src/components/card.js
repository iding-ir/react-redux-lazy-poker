import React from "react";
import * as classnames from "classnames";

import "./card.css";

const Card = (props) => {
  const { rank, suit, highlight } = props.card;
  const cardIcon = `cards-icon-${suit}`;
  const cardClasses = classnames("cards-card", {
    "cards-visible": props.card.suit !== "",
  });

  return (
    <React.Fragment>
      <div className={cardClasses} data-highlight={highlight}>
        <div>{rank.display}</div>

        <div className={cardIcon}></div>

        <div>{rank.display}</div>

        <div className="cards-back">
          <img src="/assets/images/card.png" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
