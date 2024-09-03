// Recrusive
export function shortestCommonSupersequenceLengthV1(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  const helper = (m = M, n = N) => {
    if (m === 0 || n === 0) return 0;
    if (text1[m - 1] === text2[n - 1]) return 1 + helper(m - 1, n - 1);
    return Math.max(helper(m - 1, n), helper(m, n - 1));
  };

  const lengthLCS = helper();
  return M + N - lengthLCS;
}

export function shortestCommonSupersequenceLength(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  const table = Array.from({ length: M + 1 }, () => new Array(N + 1));
  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table[0].length; n++) {
      if (m === 0 || n === 0) table[m][n] = 0;
      else if (text1[m - 1] === text2[n - 1])
        table[m][n] = 1 + table[m - 1][n - 1];
      else table[m][n] = Math.max(table[m - 1][n], table[m][n - 1]);
    }
  }

  const lengthLCS = table[M][N];
  return M + N - lengthLCS;
}
