export function twoSum(nums, target) {
  const N = nums.length;
  if (N === 0) {
    return [];
  }

  const indexMap = {};

  for (let i = 0; i < N; i++) {
    const num = nums[i];
    const elementToFind = target - num;

    if (indexMap[elementToFind] >= 0) {
      return [indexMap[elementToFind], i];
    }
    indexMap[num] = i;
  }
}
