//https://www.notion.so/piyush-arora/Binary-Search-Searching-in-sorted-array-Recursion-4112db802fc2421e93fb4649c0240e90?pvs=4
export function search(nums, target) {
  const N = nums.length;

  const binarySearch = (left, right) => {
    if (left > right) {
      return -1;
    }

    const mid = Math.floor((left + right) / 2);
    const element = nums[mid];

    if (element === target) {
      return mid;
    }

    if (element < target) {
      return binarySearch(mid + 1, right);
    }

    return binarySearch(left, mid - 1);
  };

  return binarySearch(0, N - 1);
}
