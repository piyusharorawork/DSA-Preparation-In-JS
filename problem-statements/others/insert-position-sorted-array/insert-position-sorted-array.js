// https://www.notion.so/piyush-arora/Position-to-insert-in-a-sorted-array-7b47baafca064130b31e9fcb4848e0e8?pvs=4
export function insertPositionSortedArray(nums, target) {
  const N = nums.length;
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const element = nums[mid];

    if (element < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
