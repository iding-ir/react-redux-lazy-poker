import React from "react";
import * as classnames from "classnames";

import "./card.css";

const Card = (props) => {
  const { number, spot, highlight } = props.card;
  const cardIcon = `cards-icon-${spot}`;
  const cardClasses = classnames("cards-card", {
    "cards-visible": props.card.spot !== "",
  });

  return (
    <React.Fragment>
      <div className={cardClasses} data-highlight={highlight}>
        <div>{number}</div>

        <div className={cardIcon}></div>

        <div>{number}</div>

        <div className="cards-back">
          <img src="/assets/images/card.png" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
