import { RANKS, SUITS } from "../constants/game";

export default () => {
  let all = [];

  SUITS.forEach((suit) => {
    RANKS.forEach((rank) => {
      all = [...all, { suit, rank, highlight: false }];
    });
  });

  return all;
};
