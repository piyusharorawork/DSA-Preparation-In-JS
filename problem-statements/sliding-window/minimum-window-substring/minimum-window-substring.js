export function minWindowV1(s, t) {
  const M = s.length;
  const N = t.length;

  if (N > M) return "";

  const tMap = {};
  for (const ch of t) {
    tMap[ch] = tMap[ch] ? tMap[ch] + 1 : 1;
  }

  const requiredChars = Object.keys(tMap).length;
  let windowChars = 0;

  const windowMap = {};

  let left = 0;
  let right = 0;

  let minStr = s;

  while (right < M) {
    const rightChar = s[right];

    windowMap[rightChar] = windowMap[rightChar] ? windowMap[rightChar] + 1 : 1;
    if (tMap[rightChar] && windowMap[rightChar] === tMap[rightChar])
      windowChars++;

    while (left <= right && requiredChars === windowChars) {
      const leftChar = s[left];
      const substr = s.substring(left, right + 1);
      if (substr.length < minStr.length) minStr = substr;

      windowMap[leftChar]--;
      left++;
      if (tMap[leftChar] && windowMap[leftChar] < tMap[leftChar]) windowChars--;
    }

    right++;
  }

  return minStr;
}

export function minWindow(s, t) {
  const M = s.length;
  const N = t.length;

  if (N > M) return "";

  // char count in t
  const tmap = {};
  for (const ch of t) {
    tmap[ch] = tmap[ch] ? tmap[ch] + 1 : 1;
  }

  // required chars in t that must be present in window map
  const required = Object.keys(tmap).length;

  // formed chars in window that are present in t
  let formed = 0;

  // minmimm window substring  result
  let isFound = false;
  let result = s;

  // char count in window
  const windowmap = {};

  let left = 0;
  let right = 0;

  while (right < M) {
    // Add the chars in window map
    const rightChar = s[right];
    windowmap[rightChar] = windowmap[rightChar] ? windowmap[rightChar] + 1 : 1;

    // if we found the char in t
    if (tmap[rightChar] && windowmap[rightChar] === tmap[rightChar]) formed++;

    // at any point of time we found the substring
    // we need to minify the substring length
    // shift left window towards right
    while (left <= right && required === formed) {
      isFound = true;

      // miniy substr
      const substr = s.substring(left, right + 1);
      if (substr.length < result.length) result = substr;

      // shift window to right
      const leftChar = s[left];
      windowmap[leftChar]--;
      left++;

      // updated formed
      if (tmap[leftChar] && windowmap[leftChar] < tmap[leftChar]) formed--;
    }

    // keep adding the right chars in window
    right++;
  }

  return isFound ? result : "";
}
