export function longestSubsequenceRepeatedK(s, k) {
  const text1 = s;
  const text2 = s;

  const M = text1.length;
  const N = text2.length;

  const table = Array.from({ length: M + 1 }, () => new Array(N + 1));

  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table[0].length; n++) {
      if (m === 0 || n === 0) table[m][n] = "";
      else if (text1[m - 1] === text2[n - 1] && m > n) {
        const str = `${table[m - 1][n - 1]}${text1[m - 1]}`;
        table[m][n] = str;
      } else {
        if (table[m - 1][n].length > table[m][n - 1].length) {
          table[m][n] = table[m - 1][n];
        } else {
          table[m][n] = table[m][n - 1];
        }
      }
    }
  }

  const isMatch = (str) => {
    let count = 0;

    let m = 0;
    let n = 0;

    while (m < M && n < str.length) {
      if (s[m] === str[n]) {
        m++;
        n++;
        if (n === str.length) {
          count++;
          n = 0;
        }
      } else m++;
    }
    return count === k;
  };

  for (let n = table[M].length - 1; n >= 0; n--) {
    if (n < table[M].length - 1 && table[M][n] === table[M][n + 1]) continue;
    if (isMatch(table[M][n])) return table[M][n];
  }

  return "";
}
