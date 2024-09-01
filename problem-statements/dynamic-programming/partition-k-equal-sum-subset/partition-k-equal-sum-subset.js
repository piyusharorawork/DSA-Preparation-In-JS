export function canPartitionKSubsetsV1(nums, k) {
  const N = nums.length;

  let sum = nums.reduce((acc, num) => acc + num, 0);

  if (sum % k !== 0) return false;
  const targetSum = sum / k;

  nums.sort((a, b) => b - a); // Sort in descending order for better pruning

  const used = new Array(N).fill(false);

  const canPartition = (k, start, currentSum) => {
    if (k === 0) return true; // Successfully partitioned into k subsets
    if (currentSum === targetSum) return canPartition(k - 1, 0, 0); // Start forming the next subset

    for (let i = start; i < N; i++) {
      if (!used[i] && currentSum + nums[i] <= targetSum) {
        used[i] = true;
        if (canPartition(k, i + 1, currentSum + nums[i])) return true;
        used[i] = false; // Backtrack
      }
    }

    return false;
  };

  return canPartition(k, 0, 0);
}

export function canPartitionKSubsets(nums, k) {
  const N = nums.length;
  const sum = nums.reduce((acc, num) => acc + num, 0);
  if (sum % k !== 0) return false;
  nums.sort((a, b) => a - b);
  const targetSum = sum / k;
  const used = new Array(N).fill(false);

  const helper = (start = 0, remaining = targetSum, count = 0) => {
    if (count === k) return true;
    if (remaining === 0) return helper(0, targetSum, count + 1);

    for (let i = start; i < N; i++) {
      if (used[i]) continue;
      if (nums[i] > remaining) break;
      used[i] = true;
      if (helper(i, remaining - nums[i], count)) return true;
      used[i] = false;

      while (i + 1 < N && nums[i] === nums[i + 1]) i++;
    }

    return false;
  };

  return helper();
}
