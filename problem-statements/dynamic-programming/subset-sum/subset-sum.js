// Using only recursion
export function subsetSumV1(nums, target) {
  const N = nums.length;
  nums.sort((a, b) => a - b);

  const helper = (n = N, remaining = target) => {
    if (n === 0) return false;

    const value = nums[n - 1];

    if (value === remaining) {
      return true;
    } else if (value > remaining) {
      return helper(n - 1, remaining);
    } else {
      return helper(n - 1, remaining - value);
    }
  };

  return helper();
}

// Using recursion with memorisation
export function subsetSumV2(nums, target) {
  const N = nums.length;
  nums.sort((a, b) => a - b);

  const cache = new Array(N);
  for (let i = 0; i < cache.length; i++) {
    cache[i] = new Array(target).fill(-1);
  }

  const helper = (n = N, remaining = target) => {
    if (n === 0) return false;

    if (cache[n - 1][remaining - 1] !== -1) {
      return false;
    }

    const value = nums[n - 1];

    if (value === remaining) {
      return true;
    } else if (value > remaining) {
      cache[n - 1][remaining - 1] = false;
      return helper(n - 1, remaining);
    } else {
      cache[n - 1][remaining - 1] = false;
      return helper(n - 1, remaining - value);
    }
  };

  return helper();
}

// Using iteration
export function subsetSum(nums, target) {
  const N = nums.length;
  nums.sort((a, b) => a - b);

  const table = new Array(N + 1);
  for (let i = 0; i < table.length; i++) {
    table[i] = new Array(target + 1);
  }

  for (let n = 0; n < table.length; n++) {
    for (let remaining = 0; remaining < table[0].length; remaining++) {
      if (n === 0) table[n][remaining] = false;
      else if (remaining === 0) table[n][remaining] = true;
      else {
        const value = nums[n - 1];
        if (value === remaining) table[n][remaining] = true;
        else if (value > remaining)
          table[n][remaining] = table[n - 1][remaining];
        else table[n][remaining] = table[n - 1][remaining - value];
      }
    }
  }

  return table[N][target];
}
