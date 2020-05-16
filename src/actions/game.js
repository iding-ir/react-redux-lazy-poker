import { MOVE_STAGE, START_GAME, END_GAME } from "../constants";

export const moveStage = () => {
  return {
    type: MOVE_STAGE,
  };
};

export const startGame = () => {
  return {
    type: START_GAME,
  };
};

export const endGame = () => {
  return {
    type: END_GAME,
  };
};
