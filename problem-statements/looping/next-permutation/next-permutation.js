export function nextPermutationV1(nums) {
  const N = nums.length;
  const getPivot = () => {
    let i = N - 1;
    while (i > 0 && nums[i] <= nums[i - 1]) i--;
    return i - 1;
  };

  const getRightSuccessor = (pivot) => {
    let i = N - 1;
    while (i >= 0 && nums[i] <= nums[pivot]) i--;
    return i;
  };

  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

  const reversePivot = (pivot) => {
    let left = pivot + 1;
    let right = N - 1;

    while (left < right && left < N && right >= 0) {
      swap(left, right);
      left++;
      right--;
    }
  };

  const pivot = getPivot();

  if (pivot === -1) return nums.sort((a, b) => a - b);

  const rightSuccessor = getRightSuccessor(pivot);
  swap(pivot, rightSuccessor);
  reversePivot(pivot);

  return nums;
}

export function nextPermutation(nums) {
  const N = nums.length;

  // calculate pivot
  let i = N - 1;
  while (i > 0 && nums[i] <= nums[i - 1]) i--;
  const pivot = i - 1;

  // If no pivot found , we reached the end permuation
  // so we need to return the first one
  if (pivot === -1) return nums.sort((a, b) => a - b);

  // find the right most successor
  i = N - 1;
  while (i >= 0 && nums[i] <= nums[pivot]) i--;

  // swap the successor and pivot
  [nums[pivot], nums[i]] = [nums[i], nums[pivot]];

  // reverse the suffix
  let left = pivot + 1;
  let right = N - 1;

  while (left < right && left < N && right >= 0) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums;
}
