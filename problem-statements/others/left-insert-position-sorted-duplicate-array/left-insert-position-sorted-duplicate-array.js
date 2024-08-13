// https://www.notion.so/piyush-arora/Left-most-element-search-in-sorted-array-containing-duplicates-05eb057352c0415aab7212cc2ee9a43c?pvs=4

export function leftInsertPositionSortedDuplicateArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // If there is only one element in an array does not matter
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const element = nums[mid];

    // move right to mid
    if (element === target) {
      right = mid - 1;
    }

    // move left to mid
    else if (element < target) {
      left = mid + 1;
    }
    // move right to mid
    else {
      right = mid - 1;
    }
  }

  return left;
}
