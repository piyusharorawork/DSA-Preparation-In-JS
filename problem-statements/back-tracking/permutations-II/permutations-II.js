export function permuteUniqueV1(nums) {
  const N = nums.length;

  if (N === 1) return [nums];

  const result = [];

  nums.sort((a, b) => a - b);

  const backTrack = (start = 0, end = N, stack = [], used = []) => {
    //termination
    if (stack.length === N) {
      result.push([...stack]);
      return;
    }

    for (let i = start; i < end; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1]) continue;

      used[i] = true;
      stack.push(nums[i]);
      backTrack(start, end, stack, used);
      stack.pop();
      used[i] = false;
    }
  };

  backTrack();

  return result;
}

export function permuteUniqueV2(nums) {
  const N = nums.length;
  const result = [];

  const backTrack = (start = 0) => {
    // Termination condition
    if (start === N) {
      result.push([...nums]); // Copy the current state of nums
      return;
    }

    const processed = new Set(); // Track elements we've already processed at this level

    for (let i = start; i < N; i++) {
      if (processed.has(nums[i])) continue; // Skip duplicates
      processed.add(nums[i]);

      // Swap to generate new permutation
      [nums[i], nums[start]] = [nums[start], nums[i]];
      backTrack(start + 1);
      // Swap back (backtrack) to restore the array
      [nums[i], nums[start]] = [nums[start], nums[i]];
    }
  };

  backTrack();

  return result;
}

export function permuteUnique(nums) {
  const N = nums.length;
  const result = [];
  const backTrack = (start = 0) => {
    const swap = (i, j) => {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    };

    // Base Condition
    if (start === N) return result.push([...nums]);

    // processed nums
    const processedNums = new Set();

    for (let i = start; i < N; i++) {
      if (processedNums.has(nums[i])) continue; // already processed
      processedNums.add(nums[i]);

      swap(i, start);
      backTrack(start + 1);
      swap(i, start);
    }
  };
  backTrack();
  return result;
}
