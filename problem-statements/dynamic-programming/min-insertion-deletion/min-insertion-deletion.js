// Recursive
export function minInsertionDeletionV1(str1, str2) {
  const M = str1.length;
  const N = str2.length;

  const lcs = (m = M, n = N) => {
    if (m === 0 || n === 0) return 0;
    if (str1[m - 1] === str2[n - 1]) return 1 + lcs(m - 1, n - 1);
    return Math.max(lcs(m - 1, n), lcs(m, n - 1));
  };

  const lengthofLCS = lcs();
  const deletion = M - lengthofLCS;
  const insetion = N - lengthofLCS;

  return [deletion, insetion];
}

// Iterative
export function minInsertionDeletion(str1, str2) {
  const M = str1.length;
  const N = str2.length;

  const table = Array.from({ length: M + 1 }, () => new Array(N + 1));
  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table[0].length; n++) {
      if (m === 0 || n === 0) table[m][n] = 0;
      else if (str1[m - 1] === str2[n - 1])
        table[m][n] = 1 + table[m - 1][n - 1];
      else table[m][n] = Math.max(table[m - 1][n], table[m][n - 1]);
    }
  }

  const lengthofLCS = table[M][N];
  const deletion = M - lengthofLCS;
  const insetion = N - lengthofLCS;

  return [deletion, insetion];
}
