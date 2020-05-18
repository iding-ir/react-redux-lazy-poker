import {
  REFRESH_DEALER,
  DEAL_PLAYER,
  DEAL_TABLE,
  HIGHLIGHT,
} from "../constants";
import allCards from "../utils/allCards";

const INITIAL_STATE = {
  dealer: [],
  players: {},
  table: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  const random = Math.floor(Math.random() * state.dealer.length);
  const picked = state.dealer[random];

  switch (action.type) {
    case REFRESH_DEALER:
      return {
        ...state,
        ...INITIAL_STATE,
        dealer: allCards(),
      };
    case DEAL_PLAYER:
      return {
        ...state,
        dealer: state.dealer.filter(
          (card) =>
            card.rank.value !== picked.rank.value || card.suit !== picked.suit
        ),
        players: {
          ...state.players,
          [action.payload]: [...(state.players[action.payload] || []), picked],
        },
      };
    case DEAL_TABLE:
      return {
        ...state,
        dealer: state.dealer.filter(
          (card) =>
            card.rank.value !== picked.rank.value || card.suit !== picked.suit
        ),
        table: [...state.table, picked],
      };
    case HIGHLIGHT:
      const table = state.table.map((card) => {
        card.highlight =
          (card.suit === action.payload.suit &&
            card.rank.value === action.payload.rank.value) ||
          card.highlight;

        return card;
      });

      const players = state.players;

      Object.values(players).forEach((player) => {
        player.forEach((card) => {
          card.highlight =
            (card.suit === action.payload.suit &&
              card.rank.value === action.payload.rank.value) ||
            card.highlight;
        });
      });

      return { ...state, table, players };
    default:
      return state;
  }
};

export default reducer;
