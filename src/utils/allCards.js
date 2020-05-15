import { NUMBERS, SPOTS } from "../constants/game";

export default () => {
  let all = [];

  SPOTS.forEach((spot) => {
    NUMBERS.forEach((number) => {
      all = [...all, { spot, number }];
    });
  });

  return all;
};
