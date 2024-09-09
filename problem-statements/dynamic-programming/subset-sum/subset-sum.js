// Using only recursion
export function subsetSumV1(nums, target) {
  const N = nums.length;

  const helper = (n = N, remaining = target) => {
    if (remaining === 0) return true;
    if (n === 0) return false;

    const value = nums[n - 1];
    if (remaining >= value) {
      return helper(n - 1, remaining) || helper(n - 1, remaining - value);
    } else {
      return helper(n - 1, remaining);
    }
  };

  return helper();
}

// // Using recursion with memorisation
export function subsetSumV2(nums, target) {
  const N = nums.length;
  nums.sort((a, b) => a - b);

  const cache = new Array(N);
  for (let i = 0; i < cache.length; i++) {
    cache[i] = new Array(target).fill(-1);
  }

  const helper = (n = N, remaining = target) => {
    if (remaining === 0) return true;

    if (remaining < 0 || n === 0) return false;

    if (cache[n - 1][remaining - 1] !== -1) {
      return false;
    }

    const value = nums[n - 1];

    const hasSubset =
      helper(n - 1, remaining) || helper(n - 1, remaining - value);

    cache[n - 1][remaining - 1] = hasSubset;
    return hasSubset;
  };

  return helper();
}

// // Using iteration
export function subsetSumV3(nums, target) {
  const N = nums.length;
  nums.sort((a, b) => a - b);

  const table = new Array(N + 1);
  for (let i = 0; i < table.length; i++) {
    table[i] = new Array(target + 1);
  }

  for (let n = 0; n < table.length; n++) {
    for (let remaining = 0; remaining < table[0].length; remaining++) {
      if (remaining === 0) table[n][remaining] = true;
      else if (n === 0) table[n][remaining] = false;
      else {
        const value = nums[n - 1];

        if (remaining >= value) {
          table[n][remaining] =
            table[n - 1][remaining] || table[n - 1][remaining - value];
        } else {
          table[n][remaining] = table[n - 1][remaining];
        }
      }
    }
  }

  return table[N][target];
}

export function subsetSumV4(nums, target) {
  const N = nums.length;

  const table = Array.from({ length: N + 1 }, () => new Array(target + 1));

  for (let n = 0; n < table.length; n++) {
    for (let remaining = 0; remaining < table[0].length; remaining++) {
      if (remaining === 0) table[n][remaining] = true;
      else if (n === 0) table[n][remaining] = false;
      else {
        const value = nums[n - 1];
        // subarray may be included
        if (value <= remaining) {
          table[n][remaining] =
            table[n - 1][remaining - value] || table[n - 1][remaining];
        }

        // dont include the subarray
        else {
          table[n][remaining] = table[n - 1][remaining];
        }
      }
    }
  }
  return table[N][target];
}

// Bottom up recursion using current sum
export function subsetSumV5(nums, target) {
  const N = nums.length;

  const dfs = (n = N, currentSum = 0) => {
    if (currentSum === target) return true;
    if (n === 0) return false;

    const num = nums[n - 1];
    if (num + currentSum <= target) {
      return dfs(n - 1, currentSum) || dfs(n - 1, currentSum + num);
    } else {
      return dfs(n - 1, currentSum);
    }
  };

  return dfs();
}

// Cleaner recursion apt for memorisation
export function subsetSumV6(nums, target) {
  const N = nums.length;

  const dfs = (n = N, currentSum = 0) => {
    if (currentSum === target) return true;
    if (n === 0) return false;

    const num = nums[n - 1];
    return dfs(n - 1, currentSum) || dfs(n - 1, currentSum + num);
  };

  return dfs();
}

// recursion with memorisation
export function subsetSumV7(nums, target) {
  const N = nums.length;
  const cache = Array.from({ length: N + 1 }, () =>
    new Array(target + 1).fill(-1)
  );

  const dfs = (n = N, currentSum = 0) => {
    if (currentSum === target) return true;
    if (n === 0 || currentSum > target) return false;

    if (cache[n][currentSum] !== -1) return cache[n][currentSum];

    const num = nums[n - 1];
    const result = dfs(n - 1, currentSum) || dfs(n - 1, currentSum + num);
    cache[n][currentSum] = result;
    return result;
  };

  return dfs();
}

export function subsetSum(nums, target) {
  const N = nums.length;

  const table = Array.from({ length: N + 1 }, () => new Array(target + 1));

  for (let n = 0; n < table.length; n++) {
    for (let currentSum = 0; currentSum < table[0].length; currentSum++) {
      if (currentSum === 0) table[n][currentSum] = true;
      else if (n === 0) table[n][currentSum] = false;
      else {
        const num = nums[n - 1];
        // subarray may be included
        if (num <= currentSum) {
          table[n][currentSum] =
            table[n - 1][currentSum - num] || table[n - 1][currentSum];
        }

        // dont include the subarray
        else {
          table[n][currentSum] = table[n - 1][currentSum];
        }
      }
    }
  }
  return table[N][target];
}
