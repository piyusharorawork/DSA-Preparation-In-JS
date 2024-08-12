export function longestPalindrome(s) {
  const countMap = {};

  let result = 0;
  let hasOddCount = false;

  for (const ch of s) {
    countMap[ch] = countMap[ch] ? countMap[ch] + 1 : 1;
  }

  for (const ch in countMap) {
    const count = countMap[ch];
    if (count % 2 === 0) {
      result += count;
    } else {
      hasOddCount = true;
      result += count - 1;
    }
  }

  if (hasOddCount) {
    result += 1;
  }
  return result;
}
