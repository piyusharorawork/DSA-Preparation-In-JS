// without memorisation
export function longestCommonSubsequenceV1(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  const helper = (m = M, n = N) => {
    if (m === 0 || n === 0) return 0;

    if (text1[m - 1] === text2[n - 1]) {
      return 1 + helper(m - 1, n - 1);
    } else {
      return Math.max(helper(m, n - 1), helper(m - 1, n));
    }
  };

  return helper();
}

// With memorisation
export function longestCommonSubsequenceV2(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  const cache = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(-1));

  const helper = (m = M, n = N) => {
    if (m === 0 || n === 0) return 0;

    if (cache[m][n] !== -1) return cache[m][n];

    const result =
      text1[m - 1] === text2[n - 1]
        ? 1 + helper(m - 1, n - 1)
        : Math.max(helper(m, n - 1), helper(m - 1, n));

    cache[m][n] = result;

    return result;
  };

  return helper();
}

// With DP
export function longestCommonSubsequenceV3(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  const table = Array.from({ length: M + 1 }, () => new Array(N + 1));

  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table[0].length; n++) {
      if (m === 0 || n === 0) table[m][n] = 0;
      else {
        table[m][n] =
          text1[m - 1] === text2[n - 1]
            ? 1 + table[m - 1][n - 1]
            : Math.max(table[m][n - 1], table[m - 1][n]);
      }
    }
  }

  return table[M][N];
}

export function longestCommonSubsequence(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  const table = Array.from({ length: M + 1 }, () => new Array(N + 1));

  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table[0].length; n++) {
      if (m === 0 || n === 0) table[m][n] = 0;
      else {
        const isSame = text1[m - 1] === text2[n - 1];
        table[m][n] = isSame
          ? 1 + table[m - 1][n - 1]
          : Math.max(table[m - 1][n], table[m][n - 1]);
      }
    }
  }
  return table[M][N];
}
