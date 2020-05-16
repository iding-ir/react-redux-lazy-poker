import { SUITS } from "../constants/game";

export default (final) => {
  console.log(groupBySuit(final));
};

function groupBySuit(cards) {
  return SUITS.reduce(
    (total, suit) =>
      (total = [...total, cards.filter((card) => card.suit === suit)]),
    []
  );
}
