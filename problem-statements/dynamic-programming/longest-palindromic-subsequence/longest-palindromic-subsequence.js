export function longestPalindromeSubseq(s) {
  const t = s.split("").reverse().join("");

  const M = s.length;
  const N = t.length;

  const table = Array.from({ length: M + 1 }, () => new Array(N + 1));
  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table[0].length; n++) {
      if (m === 0 || n === 0) table[m][n] = 0;
      else if (s[m - 1] === t[n - 1]) table[m][n] = 1 + table[m - 1][n - 1];
      else table[m][n] = Math.max(table[m - 1][n], table[m][n - 1]);
    }
  }

  return table[M][N];
}
