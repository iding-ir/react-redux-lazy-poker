import { SUITS, RANKS } from "../constants/game";
import {
  NUMBER_OF_FINAL_CARDS,
  FLUSH_CONDITION,
  STRAIGHT_CONDITION,
  FOUR_OF_A_KIND_CONDITION,
  THREE_OF_A_KIND_CONDITION,
  PAIR_CONDITION,
} from "../configs";

export default (final) => {
  console.log(checkHighCard(final));
};

function checkHighCard(cards) {
  const final = sortByRanks(cards).slice(0, NUMBER_OF_FINAL_CARDS);
  const highcard = final[0];

  return { final, highcard };
}

function checkFourOfAKind(cards) {
  return groupByRank(cards).reduce(
    (total, group) => total || group.length >= FOUR_OF_A_KIND_CONDITION,
    false
  );
}

function checkThreeOfAKind(cards) {
  return groupByRank(cards).reduce(
    (total, group) => total || group.length >= THREE_OF_A_KIND_CONDITION,
    false
  );
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

function sortByRanks(cards) {
  return cards.sort((a, b) => RANKS.indexOf(a.rank) - RANKS.indexOf(b.rank));
}
