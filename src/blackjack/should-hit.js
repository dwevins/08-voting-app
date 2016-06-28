import shouldSplit from 'blackjack/should-split';
import cardSum from 'blackjack/card-sum';

export default function shouldHit(cardA, cardB) {
  if ((shouldSplit(cardA, cardB) === false) && (cardSum(cardA, cardB) < 17)) {
    return true;
  }

  return false;
}
