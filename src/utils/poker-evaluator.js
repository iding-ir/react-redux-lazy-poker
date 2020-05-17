import { SUITS, RANKS } from "../constants/game";
import {
  NUMBER_OF_FINAL_CARDS,
  PAIR_CONDITION,
  THREE_OF_A_KIND_CONDITION,
  FOUR_OF_A_KIND_CONDITION,
  FLUSH_CONDITION,
  STRAIGHT_CONDITION,
} from "../configs";

export default (final) => {
  if (checkFlush(final)) {
    console.log(checkFlush(final));
  } else if (checkFourOfAKind(final)) {
    console.log(checkFourOfAKind(final));
  } else if (checkThreeOfAKind(final)) {
    console.log(checkThreeOfAKind(final));
  } else if (checkTwoPair(final)) {
    console.log(checkTwoPair(final));
  } else if (checkOnePair(final)) {
    console.log(checkOnePair(final));
  } else {
    console.log(checkHighCard(final));
  }
};

function checkHighCard(cards) {
  const final = sortByRanks(cards).slice(0, NUMBER_OF_FINAL_CARDS);
  const highcard = final[0];

  return { final, highcard };
}

function checkOnePair(cards) {
  const pairs = groupByRank(cards).filter(
    (group) => group.length === PAIR_CONDITION
  );

  const combined = pairs.reduce((total, item) => {
    return [...total, ...item];
  }, []);

  if (pairs.length === 1) {
    const final = addHighcards(cards, combined);

    return { final, pairs };
  }

  return false;
}

function checkTwoPair(cards) {
  const pairs = groupByRank(cards).filter(
    (group) => group.length === PAIR_CONDITION
  );

  const combined = pairs.reduce((total, item) => {
    return [...total, ...item];
  }, []);

  if (pairs.length === 2) {
    const final = addHighcards(cards, combined);

    return { final, pairs };
  }

  return false;
}

function checkThreeOfAKind(cards) {
  const trio = groupByRank(cards).filter(
    (group) => group.length === THREE_OF_A_KIND_CONDITION
  );

  const combined = trio.reduce((total, item) => {
    return [...total, ...item];
  }, []);

  if (trio.length >= 1) {
    const final = addHighcards(cards, combined);

    return { final, trio };
  }

  return false;
}

function checkFourOfAKind(cards) {
  const quad = groupByRank(cards).filter(
    (group) => group.length === FOUR_OF_A_KIND_CONDITION
  );

  const combined = quad.reduce((total, item) => {
    return [...total, ...item];
  }, []);

  if (quad.length >= 1) {
    const final = addHighcards(cards, combined);

    return { final, quad };
  }

  return false;
}

function checkFlush(cards) {
  const flush = groupBySuit(cards).filter(
    (group) => group.length === FLUSH_CONDITION
  );

  const combined = flush.reduce((total, item) => {
    return [...total, ...item];
  }, []);

  if (flush.length >= 1) {
    const final = addHighcards(cards, combined);

    return { final, flush };
  }

  return false;
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

function addHighcards(from, to) {
  const combined = [...to, ...sortByRanks(from)];
  const stringified = combined.map((item) => JSON.stringify(item));
  const unique = stringified.filter(
    (card, index) => stringified.indexOf(card) === index
  );
  const cards = unique
    .map((item) => JSON.parse(item))
    .slice(0, NUMBER_OF_FINAL_CARDS);

  return cards;
}
