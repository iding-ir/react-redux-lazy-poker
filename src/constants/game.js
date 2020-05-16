export const NUMBERS = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

export const SPOTS = ["club", "spade", "heart", "diamond"];

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
  number: "",
  spot: "",
  highlight: false,
};
