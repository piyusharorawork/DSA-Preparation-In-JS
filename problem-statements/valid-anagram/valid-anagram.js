export function isAnagramV1(s, t) {
  const createCharCountMap = (str) => {
    const charCountMap = {};
    for (const ch of str) {
      charCountMap[ch] = charCountMap[ch] ? charCountMap[ch] + 1 : 1;
    }
    return charCountMap;
  };

  const sCharCountMap = createCharCountMap(s);
  const tCharCountMap = createCharCountMap(t);

  if (Object.keys(sCharCountMap).length !== Object.keys(tCharCountMap).length) {
    return false;
  }

  for (const ch in sCharCountMap) {
    const sCount = sCharCountMap[ch];
    const tCount = tCharCountMap[ch];

    if (sCount !== tCount) {
      return false;
    }
  }

  return true;
}

export function isAnagram(s, t) {
  const countMap = {};

  for (const ch of s) {
    countMap[ch] = countMap[ch] ? countMap[ch] + 1 : 1;
  }

  for (const ch of t) {
    countMap[ch] = countMap[ch] ? countMap[ch] - 1 : -1;
  }

  for (const ch in countMap) {
    const count = countMap[ch];
    if (count !== 0) {
      return false;
    }
  }
  return true;
}
