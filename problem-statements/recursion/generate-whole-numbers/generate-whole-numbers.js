export function generateWholeNumbersV1(n) {
  if (n === 1) return [1];
  return [...generateWholeNumbers(n - 1), n];
}

export function generateWholeNumbers(n) {
  if (n === 1) return [1];
  const result = generateWholeNumbers(n - 1);
  result.push(n);
  return result;
}
