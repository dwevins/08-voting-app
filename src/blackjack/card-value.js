export default function cardValue(cardName) {
  if (cardName === 'ace') {
    return 11;
  } else if ((cardName === 'king') || (cardName === 'queen') || (cardName === 'jack')) {
    return 10;
  }
  return parseInt(cardName, 10);
}
