import { SUITS, RANKS } from "../constants/game";
import { FLUSH_CONDITION } from "../configs";

export default (final) => {
  console.log(checkFlush(final));
};

function groupBySuit(cards) {
  return SUITS.reduce(
    (total, suit) =>
      (total = [...total, cards.filter((card) => card.suit === suit)]),
    []
  );
}

function orderByRanks(cards) {
  return cards.sort((a, b) => RANKS.indexOf(a.rank) - RANKS.indexOf(b.rank));
}

function checkFlush(cards) {
  return groupBySuit(cards).reduce(
    (total, group) => total || group.length >= FLUSH_CONDITION,
    false
  );
}
