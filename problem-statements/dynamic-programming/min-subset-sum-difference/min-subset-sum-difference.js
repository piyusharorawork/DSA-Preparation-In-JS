//bottom up recursion
export function minSubsetSumDifferenceV1(nums) {
  const N = nums.length;

  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  const dfs = (index, currentSum) => {
    if (index === N) {
      const otherSum = totalSum - currentSum;
      return Math.abs(currentSum - otherSum);
    }

    const num = nums[index];
    const include = dfs(index + 1, currentSum + num);
    const exclude = dfs(index + 1, currentSum);

    return Math.min(include, exclude);
  };

  return dfs(0, 0);
}

//bottom up recursion
export function minSubsetSumDifferenceV2(nums) {
  const N = nums.length;

  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  const dfs = (n = N, currentSum = 0) => {
    if (n === 0) {
      const otherSum = totalSum - currentSum;
      return Math.abs(currentSum - otherSum);
    }

    const num = nums[n - 1];
    const include = dfs(n - 1, currentSum + num);
    const exclude = dfs(n - 1, currentSum);

    return Math.min(include, exclude);
  };

  return dfs();
}

//bottom up recursion with memorisation
export function minSubsetSumDifferenceV3(nums) {
  const N = nums.length;

  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  const cache = Array.from({ length: N + 1 }, () =>
    new Array(totalSum + 1).fill(-1)
  );

  const dfs = (n = N, currentSum = 0) => {
    if (n === 0) {
      const otherSum = totalSum - currentSum;
      return Math.abs(currentSum - otherSum);
    }

    if (cache[n][currentSum] !== -1) return cache[n][currentSum];

    const num = nums[n - 1];
    const include = dfs(n - 1, currentSum + num);
    const exclude = dfs(n - 1, currentSum);

    const minSubSetSum = Math.min(include, exclude);
    cache[n][currentSum] = minSubSetSum;

    return minSubSetSum;
  };

  return dfs();
}

// dp using subset sum
export function minSubsetSumDifferenceV4(nums) {
  const N = nums.length;
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  const table = Array.from({ length: N + 1 }, () => new Array(totalSum + 1));

  for (let n = 0; n < table.length; n++) {
    for (let currentSum = 0; currentSum < table[0].length; currentSum++) {
      if (currentSum === 0) table[n][currentSum] = true;
      else if (n === 0) table[n][currentSum] = false;
      else {
        const value = nums[n - 1];
        // subarray may be included
        if (value <= currentSum) {
          table[n][currentSum] =
            table[n - 1][currentSum - value] || table[n - 1][currentSum];
        }

        // dont include the subarray
        else {
          table[n][currentSum] = table[n - 1][currentSum];
        }
      }
    }
  }

  let minDiff = totalSum;

  for (let currentSum = 0; currentSum < table[N].length; currentSum++) {
    const isSubsetPossible = table[N][currentSum];
    if (!isSubsetPossible) continue;

    const otherSum = totalSum - currentSum;
    const diff = Math.abs(currentSum - otherSum);
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}

export function minSubsetSumDifferenceV5(nums) {
  const N = nums.length;
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);

  const table = Array.from({ length: N + 1 }, () => new Array(totalSum + 1));

  for (let n = 0; n < table.length; n++) {
    for (let currentSum = 0; currentSum < table[0].length; currentSum++) {
      if (currentSum === 0) table[n][currentSum] = true;
      else if (n === 0) table[n][currentSum] = false;
      else {
        const value = nums[n - 1];
        // subarray may be included
        if (value <= currentSum) {
          table[n][currentSum] =
            table[n - 1][currentSum - value] || table[n - 1][currentSum];
        }

        // dont include the subarray
        else {
          table[n][currentSum] = table[n - 1][currentSum];
        }
      }
    }
  }

  let minDiff = totalSum;

  for (let currentSum = 0; currentSum < table[N].length; currentSum++) {
    const isSubsetPossible = table[N][currentSum];
    if (!isSubsetPossible) continue;

    const diff = Math.abs(2 * currentSum - totalSum);
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}

export function minSubsetSumDifference(nums) {
  const N = nums.length;
  const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
  const table = Array.from({ length: N + 1 }, () => new Array(totalSum + 1));
  for (let n = 0; n < table.length; n++) {
    for (
      let currentSubsetSum = 0;
      currentSubsetSum < table[0].length;
      currentSubsetSum++
    ) {
      if (currentSubsetSum === 0) table[n][currentSubsetSum] = true;
      else if (n === 0) table[n][currentSubsetSum] = false;
      else {
        const num = nums[n - 1];
        if (num <= currentSubsetSum)
          table[n][currentSubsetSum] =
            table[n - 1][currentSubsetSum - num] ||
            table[n - 1][currentSubsetSum];
        else table[n][currentSubsetSum] = table[n - 1][currentSubsetSum];
      }
    }
  }

  let minDiff = totalSum;
  for (
    let currentSubsetSum = 0;
    currentSubsetSum < table[N].length;
    currentSubsetSum++
  ) {
    // if  subset sum with current sum is possible
    const isSubsetSumPossible = table[N][currentSubsetSum];
    if (!isSubsetSumPossible) continue;
    const otherSubsetSum = totalSum - currentSubsetSum;
    const diff = Math.abs(otherSubsetSum - currentSubsetSum);
    minDiff = Math.min(minDiff, diff);
  }
  return minDiff;
}
