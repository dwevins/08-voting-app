import cardValue from 'blackjack/card-value';

export default function shouldSplit(cardA, cardB) {
  return (cardValue(cardA) === cardValue(cardB));
}
