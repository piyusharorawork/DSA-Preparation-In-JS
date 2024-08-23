// Using visit map
export function containsDuplicateV1(nums) {
  const visitMap = {};
  for (const num of nums) {
    if (visitMap[num]) return true;
    visitMap[num] = true;
  }

  return false;
}

// using visited set
export function containsDuplicate(nums) {
  const visited = new Set();
  for (const num of nums) {
    if (visited.has(num)) return true;
    visited.add(num);
  }

  return false;
}
