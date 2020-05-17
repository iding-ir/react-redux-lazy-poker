import { VALUES, SUITS } from "../constants/game";

export default () => {
  let all = [];

  SUITS.forEach((suit) => {
    VALUES.forEach((value) => {
      all = [...all, { suit, value, highlight: false }];
    });
  });

  return all;
};
