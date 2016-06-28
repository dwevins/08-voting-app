export default function calculatePercent(numerator, denominator) {
  const percent = `${Math.round((numerator / denominator) * 100)}%`;
  return percent;
}
