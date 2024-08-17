export function lengthOfLongestSubstring(s) {
  const N = s.length;

  // Window
  let start = 0;
  let end = 0;

  // final result
  let longestSubstringLength = 0;

  // Set to store the characters present in the window
  const charactersInWindow = new Set();

  // both start and end cannot cross the length of string
  while (start < N && end < N) {
    const startChar = s[start];
    const endChar = s[end];

    // If the character does not exist in the string
    if (!charactersInWindow.has(endChar)) {
      charactersInWindow.add(endChar);
      const windowLength = end - start + 1;
      longestSubstringLength = Math.max(longestSubstringLength, windowLength);
      end++;
    }

    // If the character exist in the string
    else {
      charactersInWindow.delete(startChar);
      start++;
    }
  }

  return longestSubstringLength;
}
