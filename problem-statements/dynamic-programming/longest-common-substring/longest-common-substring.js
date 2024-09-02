// Recursion
export function longestCommonSubstringV1(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  let longest = 0;

  const helper = (m = M, n = N) => {
    if (m === 0 || n === 0) return 0;

    if (text1[m - 1] === text2[n - 1]) {
      const length = 1 + helper(m - 1, n - 1);
      longest = Math.max(longest, length);
      return length;
    }

    helper(m - 1, n);
    helper(m, n - 1);

    return 0;
  };

  helper();
  return longest;
}

//DP
export function longestCommonSubstringV2(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  const table = Array.from({ length: M + 1 }, () => new Array(N + 1));
  let longest = 0;

  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table.length; n++) {
      if (m === 0 || n === 0) table[m][n] = 0;
      else if (text1[m - 1] === text2[n - 1]) {
        table[m][n] = table[m - 1][n - 1] + 1;
        longest = Math.max(longest, table[m][n]);
      } else table[m][n] = 0;
    }
  }

  return longest;
}

// DP CLeaner
export function longestCommonSubstring(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  const table = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(0));
  let longest = 0;

  for (let m = 1; m < table.length; m++) {
    for (let n = 1; n < table.length; n++) {
      if (text1[m - 1] === text2[n - 1]) {
        table[m][n] = table[m - 1][n - 1] + 1;
        longest = Math.max(longest, table[m][n]);
      }
    }
  }

  return longest;
}
