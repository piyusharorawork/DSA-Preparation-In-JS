// recursive
export function longestCommonSubsequencePrintV1(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  const helper = (m = M, n = N) => {
    if (m === 0 || n === 0) return "";

    if (text1[m - 1] === text2[n - 1])
      return `${helper(m - 1, n - 1)}${text1[m - 1]}`;

    const str1 = helper(m - 1, n);
    const str2 = helper(m, n - 1);

    if (str1.length > str2.length) return str1;
    return str2;
  };

  return helper();
}

// Using DP but more space
export function longestCommonSubsequencePrintV2(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  const table = Array.from({ length: M + 1 }, () => new Array(N + 1));

  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table[0].length; n++) {
      if (m === 0 || n === 0) table[m][n] = "";
      else if (text1[m - 1] === text2[n - 1])
        table[m][n] = `${table[m - 1][n - 1]}${text1[m - 1]}`;
      else {
        const str1 = table[m - 1][n];
        const str2 = table[m][n - 1];
        table[m][n] = str1.length > str2.length ? str1 : str2;
      }
    }
  }
  return table[M][N];
}

// Using DP but with less space
export function longestCommonSubsequencePrint(text1, text2) {
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

  let m = M;
  let n = N;

  let longest = "";

  while (m > 0 && n > 0) {
    if (text1[m - 1] === text2[n - 1]) {
      longest += text1[m - 1];
      m--;
      n--;
    } else if (table[m - 1][n] > table[m][n - 1]) m--;
    else n--;
  }

  return longest.split("").reverse().join("");
}
