export function findAnagrams(s, p) {
  const N = s.length;
  const windowSize = p.length;

  // if length of p itself is grater than s
  // it is not possible to have any anagram
  if (N < windowSize) return [];

  // To store the list of indexes anagrams
  const result = [];

  // the characters present in the current window
  const windowCountMap = {};

  // Insert the count of chars of p
  for (const ch of p) {
    windowCountMap[ch] = windowCountMap[ch] ? windowCountMap[ch] + 1 : 1;
  }

  // Decrement the count of char which
  // Are in current window
  // Also present in windowCountMap
  for (let i = 0; i < windowSize; i++) {
    const ch = s[i];
    if (windowCountMap.hasOwnProperty(ch)) windowCountMap[ch] -= 1;
  }

  // Now our window is initialized
  // Now a reusable helper method to check
  // if we find the anagram in current window
  const isAnagram = () => {
    for (const ch in windowCountMap) {
      if (windowCountMap[ch] !== 0) return false;
    }
    return true;
  };

  // If we find the anagram in current window itself
  if (isAnagram()) result.push(0);

  // window
  let left = 0;
  let right = windowSize;

  while (right < N) {
    const leftChar = s[left];
    const rightChar = s[right];

    if (windowCountMap.hasOwnProperty(leftChar)) windowCountMap[leftChar] += 1;
    if (windowCountMap.hasOwnProperty(rightChar))
      windowCountMap[rightChar] -= 1;

    if (isAnagram()) result.push(right - windowSize + 1);

    left++;
    right++;
  }

  return result;
}
