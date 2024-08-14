export function majorityElementV1(nums) {
  const countMap = {};

  for (const num of nums) {
    countMap[num] = countMap[num] ? countMap[num] + 1 : 1;
  }

  let maxCount = 0;
  let majorityElement = 0;

  for (const numStr in countMap) {
    const count = countMap[numStr];
    if (count > maxCount) {
      maxCount = count;
      majorityElement = parseInt(numStr);
    }
  }

  return majorityElement;
}

export function majorityElement(nums) {
  let count = 0;
  let candidate;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count = num === candidate ? count + 1 : count - 1;
  }
  return candidate;
}
