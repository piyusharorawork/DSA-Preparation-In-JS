// O(N2)
export function generateReverseWholeNumbersV1(n) {
  if (n === 1) return [1];
  const list = generateReverseWholeNumbersV1(n - 1);
  return [n, ...list];
}

export function generateReverseWholeNumbers(n) {
  if (n === 1) return [1];
  const list = generateReverseWholeNumbers(n - 1);
  list.unshift(n);
  return list;
}
