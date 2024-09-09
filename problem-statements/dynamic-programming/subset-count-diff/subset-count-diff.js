// only recursion
export function subsetCountDiffV1(nums, diff) {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  if (diff + totalSum < 0) return 0;
  if ((diff + totalSum) % 2 !== 0) return 0;
  const zeroCount = nums.filter((num) => num === 0).length;
  const target = (diff + totalSum) / 2;
  const numsWithoutZero = nums.filter((num) => num !== 0);
  const N = numsWithoutZero.length;

  const dfs = (n = N, remaining = target) => {
    if (remaining === 0) return 1;
    if (remaining < 0 || n === 0) return 0;
    const num = numsWithoutZero[n - 1];

    // num may be used
    if (num <= remaining) {
      return dfs(n - 1, remaining - num) + dfs(n - 1, remaining);
    }
    return dfs(n - 1, remaining);
  };

  const resultWithoutZeros = dfs();
  return Math.pow(2, zeroCount) * resultWithoutZeros;
}

// Recursion with memorisation
export function subsetCountDiffV2(nums, diff) {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  if (diff + totalSum < 0) return 0;
  if ((diff + totalSum) % 2 !== 0) return 0;

  const zeroCount = nums.filter((num) => num === 0).length;
  const target = (diff + totalSum) / 2;
  const numsWithoutZero = nums.filter((num) => num !== 0);
  const N = numsWithoutZero.length;

  const cache = Array.from({ length: N + 1 }, () =>
    new Array(target + 1).fill(-1)
  );

  const dfs = (n = N, remaining = target) => {
    if (remaining === 0) return 1;
    if (remaining < 0 || n === 0) return 0;
    if (cache[n][remaining] !== -1) return cache[n][remaining];

    const num = numsWithoutZero[n - 1];

    // num may be used
    if (num <= remaining) {
      const usingCount = dfs(n - 1, remaining - num) + dfs(n - 1, remaining);
      cache[n][remaining] = usingCount;
      return usingCount;
    }
    const notUsingCount = dfs(n - 1, remaining);
    cache[n][remaining] = notUsingCount;
    return notUsingCount;
  };

  const resultWithoutZeros = dfs();
  return Math.pow(2, zeroCount) * resultWithoutZeros;
}

// DP
export function subsetCountDiff(nums, diff) {
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  if (diff + totalSum < 0) return 0;
  if ((diff + totalSum) % 2 !== 0) return 0;

  const zeroCount = nums.filter((num) => num === 0).length;
  const target = (diff + totalSum) / 2;
  const numsWithoutZero = nums.filter((num) => num !== 0);
  const N = numsWithoutZero.length;
  const table = Array.from({ length: N + 1 }, () => new Array(target + 1));

  for (let n = 0; n < table.length; n++) {
    for (let remaining = 0; remaining < table[0].length; remaining++) {
      if (remaining === 0) table[n][remaining] = 1;
      else if (remaining < 0 || n === 0) table[n][remaining] = 0;
      else {
        const num = numsWithoutZero[n - 1];
        if (num <= remaining) {
          table[n][remaining] =
            table[n - 1][remaining - num] + table[n - 1][remaining];
        } else {
          table[n][remaining] = table[n - 1][remaining];
        }
      }
    }
  }

  return Math.pow(2, zeroCount) * table[N][target];
}
