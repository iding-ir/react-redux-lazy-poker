import { SUITS, RANKS } from "../constants/game";
import { FLUSH_CONDITION, STRAIGHT_CONDITION } from "../configs";

export default (final) => {
  checkStraight(final);
};

function groupBySuit(cards) {
  return SUITS.reduce(
    (total, suit) =>
      (total = [...total, cards.filter((card) => card.suit === suit)]),
    []
  );
}

function groupByRank(cards) {
  return RANKS.reduce(
    (total, rank) =>
      (total = [...total, cards.filter((card) => card.rank === rank)]),
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

function checkStraight(cards) {
  const ranks = Object.values(cards).map((card) => card.rank);
  let isStraight = false;

  for (let i = 0; i <= RANKS.length - STRAIGHT_CONDITION + 1; i++) {
    const straight = [...RANKS, RANKS[0]].slice(i, i + STRAIGHT_CONDITION);

    if (straight.every((item) => ranks.includes(item))) {
      isStraight = true;

      break;
    }
  }

  return isStraight;
}
