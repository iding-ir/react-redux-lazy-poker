import React from "react";

import "./deck.css";
import Card from "./card";
import { defaultCard } from "../constants/game";

const Deck = (props) => {
  let { table } = props.cards;

  while (table.length < 5) {
    table = [...table, defaultCard];
  }

  return (
    <div className="deck">
      <div className="deck-cards">
        {table.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Deck;
