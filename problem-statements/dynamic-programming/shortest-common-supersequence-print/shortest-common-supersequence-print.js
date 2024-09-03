export function shortestCommonSupersequence(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  const table = Array.from({ length: M + 1 }, () => new Array(N + 1));

  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table[0].length; n++) {
      if (m === 0 || n === 0) table[m][n] = 0;
      else if (text1[m - 1] === text2[n - 1])
        table[m][n] = 1 + table[m - 1][n - 1];
      else table[m][n] = Math.max(table[m][n - 1], table[m - 1][n]);
    }
  }

  let m = M;
  let n = N;
  let result = "";

  while (m > 0 && n > 0) {
    if (text1[m - 1] === text2[n - 1]) {
      result += text1[m - 1];
      m--;
      n--;
    } else if (table[m - 1][n] > table[m][n - 1]) {
      result += text1[m - 1];
      m--;
    } else {
      result += text2[n - 1];
      n--;
    }
  }

  while (m > 0) {
    result += text1[m - 1];
    m--;
  }

  while (n > 0) {
    result += text2[n - 1];
    n--;
  }

  return result.split("").reverse().join("");
}
