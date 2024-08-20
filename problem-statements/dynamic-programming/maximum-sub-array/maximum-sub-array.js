export function maxSubArrayV1(nums) {
  const N = nums.length;
  const table = new Array(N);
  table[0] = nums[0];
  let result = nums[0];

  for (let i = 1; i < N; i++) {
    table[i] = Math.max(nums[i], nums[i] + table[i - 1]);
    result = Math.max(result, table[i]);
  }

  return result;
}

export function maxSubArray(nums) {
  const N = nums.length;
  let result = nums[0];

  for (let i = 1; i < N; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    result = Math.max(result, nums[i]);
  }

  return result;
}
