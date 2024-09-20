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

export function maxSubArrayV2(nums) {
  const N = nums.length;
  let result = nums[0];

  for (let i = 1; i < N; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    result = Math.max(result, nums[i]);
  }

  return result;
}

// Using recursion
export function maxSubArrayV3(nums) {
  const N = nums.length;
  let result = -Infinity;

  const dfs = (n = N, runningSum = -Infinity) => {
    if (n === 0) return;
    const num = nums[n - 1];
    runningSum = Math.max(num + runningSum, num);
    result = Math.max(result, runningSum);
    dfs(n - 1, runningSum);
  };

  dfs();
  return result;
}

// Using iteration
export function maxSubArray(nums) {
  const N = nums.length;
  let result = -Infinity;
  let runningSum = -Infinity;

  for (let n = N; n > 0; n--) {
    const num = nums[n - 1];
    runningSum = Math.max(num + runningSum, num);
    result = Math.max(result, runningSum);
  }
  return result;
}
