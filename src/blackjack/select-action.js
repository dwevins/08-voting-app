import shouldHit from 'blackjack/should-hit';
import shouldSplit from 'blackjack/should-split';

export default function selectAction(cardA, cardB) {
  if (shouldHit(cardA, cardB) === true) {
    return 'hit';
  } else if (shouldSplit(cardA, cardB) === true) {
    return 'split';
  }

  return 'stay';
}
