export function searchRange(nums, target) {
  const N = nums.length;
  if (N === 0) {
    return [-1, -1];
  }

  const isFound = () => {
    let left = 0;
    let right = N - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return true;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return false;
  };

  const getFirstIndex = () => {
    let left = 0;
    let right = N - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  };

  const getLastIndex = () => {
    let left = 0;
    let right = N - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right;
  };

  if (!isFound()) {
    return [-1, -1];
  }

  const firstIndex = getFirstIndex();
  const lastIndex = getLastIndex();

  return [firstIndex, lastIndex];
}
