
export default function shouldHit(cardA, cardB) {
  if (!(cardA === cardB)) {
    if ((cardValue(cardA) + cardValue(cardB)) < 17) {
      return true;
    }
  }
  return false;
}
