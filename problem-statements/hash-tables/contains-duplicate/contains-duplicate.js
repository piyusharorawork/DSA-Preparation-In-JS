export function containsDuplicate(nums) {
  const countMap = {};
  for (const num of nums) {
    if (countMap[num]) return true;
    countMap[num] = true;
  }

  return false;
}
