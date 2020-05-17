import {
  REFRESH_DEALER,
  DEAL_PLAYER,
  DEAL_TABLE,
  HIGHLIGHT,
} from "../constants";

export const refreshDealer = () => {
  return {
    type: REFRESH_DEALER,
  };
};

export const dealPlayer = (id) => {
  return {
    type: DEAL_PLAYER,
    payload: id,
  };
};

export const dealTable = () => {
  return {
    type: DEAL_TABLE,
  };
};

export const highlight = (card) => {
  return {
    type: HIGHLIGHT,
    payload: card,
  };
};
