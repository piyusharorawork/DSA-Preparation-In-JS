export function sortRecursiveV1(nums) {
  const N = nums.length;
  const sort = (n) => {
    // if length of array is 0
    if (n === 0) return [];

    // if length of array is 1
    if (n === 1) return [nums[0]];

    const array = sort(n - 1);

    if (nums[n - 1] > array[array.length - 1]) return [...array, nums[n - 1]];

    if (nums[n - 1] < array[0]) return [nums[n - 1], ...array];

    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] <= nums[n - 1]) left = mid + 1;
      else right = mid - 1;
    }
    array.splice(left, 0, nums[n - 1]);
    return array;
  };

  return sort(N);
}

export function sortRecursive(nums) {
  if (nums.length < 2) return nums;
  const last = nums.pop();
  const array = sortRecursive(nums);

  // insert last element to sorted array
  if (last >= array[array.length - 1]) array.push(last);
  else if (last <= array[0]) array.unshift(last);
  else {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] <= last) left = mid + 1;
      else right = mid - 1;
    }
    array.splice(left, 0, last);
  }

  return array;
}
