export function minDeletionPalindrome(text1) {
  const text2 = text1.split("").reverse().join("");
  const N = text1.length;

  const table = Array.from({ length: N + 1 }, () => new Array(N + 1));
  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table[0].length; n++) {
      if (m === 0 || n === 0) table[m][n] = 0;
      else if (text1[m - 1] === text2[n - 1])
        table[m][n] = 1 + table[m - 1][n - 1];
      else table[m][n] = Math.max(table[m - 1][n], table[m][n - 1]);
    }
  }

  return N - table[N][N];
}
