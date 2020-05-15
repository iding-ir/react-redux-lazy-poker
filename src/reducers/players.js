import { ADD_PLAYER, REMOVE_PLAYER } from "../constants";

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        {
          name: "Player",
          id: new Date().getTime(),
          points: 0,
        },
      ];

    case REMOVE_PLAYER:
      return state.filter((player) => player.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
