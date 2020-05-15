import allCards from "./allCards";

export default (count, alreadyDealt) => {
  let randomCards = [];

  for (let i = 0; i <= count; i++) {
    const undealtCards = allCards.filter(
      (card) => !alreadyDealt.includes(card)
    );
    const randomNumber = Math.random() * undealtCards.length;
    const card = undealtCards(randomNumber);

    randomCards = [...randomCards, card];
    alreadyDealt = [...alreadyDealt, card];
  }

  return randomCards;
};
