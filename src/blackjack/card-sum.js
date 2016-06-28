import cardValue from 'blackjack/card-value';

export default function cardSum(cardA, cardB) {
  return (cardValue(cardA) + cardValue(cardB));
}
