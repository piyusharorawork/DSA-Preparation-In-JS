export function search(nums, target) {
  const N = nums.length;
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    // If there is only one element in that array
    const mid = Math.floor((left + right) / 2);
    const element = nums[mid];
    if (element === target) {
      return mid;
    }
    if (element < target) {
      // search in the right
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
