export function canConstruct(ransomNote, magazine) {
  const charCount = {};
  for (const ch of magazine) {
    charCount[ch] = charCount[ch] ? charCount[ch] + 1 : 1;
  }

  for (const ch of ransomNote) {
    charCount[ch] = charCount[ch] ? charCount[ch] - 1 : -1;
  }

  for (const ch in charCount) {
    const count = charCount[ch];
    if (count < 0) {
      return false;
    }
  }

  return true;
}
