import { DEAL_PLAYERS, DEAL_FLOP, DEAL_TURN, DEAL_RIVER } from "../constants";

export const dealPlayers = () => {
  return {
    type: DEAL_PLAYERS,
  };
};

export const dealFlop = () => {
  return {
    type: DEAL_FLOP,
  };
};

export const dealTurn = () => {
  return {
    type: DEAL_TURN,
  };
};

export const dealRiver = () => {
  return {
    type: DEAL_RIVER,
  };
};
