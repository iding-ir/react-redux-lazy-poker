export const VALUES = [
  "A",
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
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
