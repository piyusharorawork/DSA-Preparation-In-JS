export function search(nums, target) {
  const N = nums.length;

  const getPivot = () => {
    let left = 0;
    let right = N - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };

  const pivot = getPivot();

  const search = () => {
    let left = 0;
    let right = N - 1;

    while (left <= right) {
      const fakeMid = Math.floor((left + right) / 2);
      const actualMid = (fakeMid + pivot) % N;
      if (nums[actualMid] === target) {
        return actualMid;
      } else if (nums[actualMid] < target) {
        left = fakeMid + 1;
      } else {
        right = fakeMid - 1;
      }
    }

    return -1;
  };

  return search();
}
