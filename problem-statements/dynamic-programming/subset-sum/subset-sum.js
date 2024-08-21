// Using only recursion
export function subsetSumV1(nums, target) {
  const N = nums.length;
  nums.sort((a, b) => a - b);

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

export function subsetSum(nums, target) {
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
