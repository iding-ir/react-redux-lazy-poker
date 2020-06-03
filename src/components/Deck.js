import React from "react";

import "./Deck.css";
import Card from "./Card";
import { defaultCard } from "../constants/game";
import {
  NUMBER_OF_CARDS_FOR_FLOP,
  NUMBER_OF_CARDS_FOR_TURN,
  NUMBER_OF_CARDS_FOR_RIVER,
} from "../configs";

const Deck = (props) => {
  let { table } = props.cards;

  const deckSize =
    NUMBER_OF_CARDS_FOR_FLOP +
    NUMBER_OF_CARDS_FOR_TURN +
    NUMBER_OF_CARDS_FOR_RIVER;

  while (table.length < deckSize) {
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
