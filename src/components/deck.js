import React from "react";

import "./deck.css";
import Card from "./card";

const Deck = (props) => {
  const { cards } = props;

  return (
    <div className="deck">
      <div className="deck-cards">
        {cards.table.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Deck;
