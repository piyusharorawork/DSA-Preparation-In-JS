export function generateReverseWholeNumbers(n) {
  if (n === 1) return [1];
  return [n, ...generateReverseWholeNumbers(n - 1)];
}
