export const RANKS = [
  { value: "A", display: "A" },
  { value: "K", display: "K" },
  { value: "Q", display: "Q" },
  { value: "J", display: "J" },
  { value: "T", display: "10" },
  { value: "9", display: "9" },
  { value: "8", display: "8" },
  { value: "7", display: "7" },
  { value: "6", display: "6" },
  { value: "5", display: "5" },
  { value: "4", display: "4" },
  { value: "3", display: "3" },
  { value: "2", display: "2" },
];

export const SUITS = ["c", "s", "h", "d"];

export const STAGES = [
  {
    slug: "new-round",
    title: "New Round",
    button: "Deal Preflop",
    icon: "filter_2",
  },
  {
    slug: "preflop",
    title: "Preflop",
    button: "Deal Flop",
    icon: "filter_3",
  },
  {
    slug: "flop",
    title: "Flop",
    button: "Deal Turn",
    icon: "filter_1",
  },
  {
    slug: "turn",
    title: "Turn",
    button: "Deal River",
    icon: "filter_1",
  },
  {
    slug: "river",
    title: "River",
    button: "See Result",
    icon: "flare",
  },
  {
    slug: "result",
    title: "Result",
    button: "New Round",
    icon: "refresh",
  },
];

export const defaultCard = {
  rank: "",
  suit: "",
  highlight: false,
};
