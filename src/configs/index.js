export const NUMBER_OF_DEFAULT_PLAYERS =
  process.env.REACT_APP_NUMBER_OF_DEFAULT_PLAYERS;
export const MINIMUM_NUMBER_OF_PLAYERS =
  process.env.REACT_APP_MINIMUM_NUMBER_OF_PLAYERS;
export const MAXIMUM_NUMBER_OF_PLAYERS =
  process.env.REACT_APP_MAXIMUM_NUMBER_OF_PLAYERS;
export const NUMBER_OF_CARDS_PER_PLAYER =
  process.env.REACT_APP_NUMBER_OF_CARDS_PER_PLAYER;

export const NUMBER_OF_CARDS_FOR_FLOP = 3;
export const NUMBER_OF_CARDS_FOR_TURN = 1;
export const NUMBER_OF_CARDS_FOR_RIVER = 1;

export const AUTOPLAY_DELAY_MS = process.env.REACT_APP_AUTOPLAY_DELAY_MS;
export const TOAST_DURATION = process.env.REACT_APP_TOAST_DURATION;

export const RANDOM_PLAYER_NAMES = ["Koshka", "Gulbi", "Remuss"];

export const HANDPOINTS = [
  { hand: "High Card", points: 1 },
  { hand: "Pair", points: 2 },
  { hand: "Two Pair", points: 3 },
  { hand: "Three of a Kind", points: 4 },
  { hand: "Straight", points: 5 },
  { hand: "Flush", points: 6 },
  { hand: "Full House", points: 7 },
  { hand: "Four of a Kind", points: 10 },
  { hand: "Straight Flush", points: 20 },
];
