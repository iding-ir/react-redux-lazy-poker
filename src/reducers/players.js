import { ADD_PLAYER, REMOVE_PLAYER } from "../constants";

const INITIAL_STATE = [
  {
    name: "Player 1",
    id: 1,
    round: {
      cards: [null, null],
      winner: false,
      bests: [],
      hand: undefined,
    },
    points: 0,
  },
  {
    name: "Player 2",
    id: 2,
    round: {
      cards: [null, null],
      winner: false,
      bests: [],
      hand: undefined,
    },
    points: 0,
  },
];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        {
          name: "Player",
          id: new Date().getTime(),
          round: {
            cards: [null, null],
            winner: false,
            bests: [],
            hand: undefined,
          },
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
