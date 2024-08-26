// with global var
export function countSubsetV1(nums, target) {
  const N = nums.length;

  let count = 0;

  const helper = (n = N, remaining = target) => {
    if (remaining === 0) {
      count++;
    } else if (remaining < 0 || n === 0) {
      return;
    } else {
      const num = nums[n - 1];
      if (num > remaining) {
        helper(n - 1, remaining);
      } else {
        helper(n - 1, remaining - num);
        helper(n - 1, remaining);
      }
    }
  };

  helper();
  return count;
}

// Without global var
export function countSubsetV2(nums, target) {
  const N = nums.length;

  const helper = (n = N, remaining = target) => {
    if (remaining === 0) {
      return 1;
    }

    if (n === 0 || remaining < 0) {
      return 0;
    }

    const num = nums[n - 1];
    return helper(n - 1, remaining - num) + helper(n - 1, remaining);
  };

  return helper();
}

// With memorisation
export function countSubsetV3(nums, target) {
  const N = nums.length;

  const cache = Array.from({ length: N + 1 }, () =>
    new Array(target + 1).fill(-1)
  );

  const helper = (n = N, remaining = target) => {
    if (remaining === 0) {
      return 1;
    }

    if (n === 0 || remaining < 0) {
      return 0;
    }

    if (cache[n][remaining] !== -1) return cache[n][remaining];

    const num = nums[n - 1];
    const count = helper(n - 1, remaining - num) + helper(n - 1, remaining);

    cache[n][remaining] = count;
    return count;
  };

  return helper();
}

// DP
export function countSubsetV4(nums, target) {
  const N = nums.length;

  const table = Array.from({ length: N + 1 }, () =>
    new Array(target + 1).fill(0)
  );

  for (let n = 0; n <= N; n++) {
    for (let remaining = 0; remaining <= target; remaining++) {
      if (remaining === 0) table[n][remaining] = 1;
      else if (n === 0) table[n][remaining] = 0;
      else {
        const num = nums[n - 1];
        if (remaining >= num) {
          table[n][remaining] =
            table[n - 1][remaining - num] + table[n - 1][remaining];
        } else {
          table[n][remaining] = table[n - 1][remaining];
        }
      }
    }
  }

  return table[N][target];
}

export function countSubset(nums, target) {
  const N = nums.length;

  const helper = (n = N, remaining = target) => {
    if (remaining === 0) {
      return 1;
    }

    if (n === 0 || remaining < 0) {
      return 0;
    }

    const num = nums[n - 1];
    if (num > target) {
      return helper(n - 1, remaining);
    } else {
      return helper(n - 1, remaining - num) + helper(n - 1, remaining);
    }
  };

  return helper();
}
