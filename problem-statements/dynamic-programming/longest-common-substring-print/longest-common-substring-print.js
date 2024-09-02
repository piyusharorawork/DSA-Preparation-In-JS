export function longestCommonSubstringPrintV1(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  let longest = "";

  const helper = (m = M, n = N) => {
    if (m === 0 || n === 0) return "";

    if (text1[m - 1] === text2[n - 1]) {
      const str = `${helper(m - 1, n - 1)}${text1[m - 1]}`;
      if (longest.length < str.length) longest = str;
      return str;
    }

    helper(m - 1, n);
    helper(m, n - 1);

    return "";
  };

  helper();

  return longest;
}

// DP
export function longestCommonSubstringPrintV2(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  let longest = "";

  const table = Array.from({ length: M + 1 }, () => new Array(N + 1));

  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table[0].length; n++) {
      if (m === 0 || n === 0) table[m][n] = "";
      else if (text1[m - 1] === text2[n - 1]) {
        table[m][n] = `${table[m - 1][n - 1]}${text1[m - 1]}`;
        if (longest.length < table[m][n].length) longest = table[m][n];
      } else {
        table[m][n] = "";
      }
    }
  }

  return longest;
}

// DP Cleaner
export function longestCommonSubstringPrint(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  let longest = "";

  const table = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(""));

  for (let m = 1; m < table.length; m++) {
    for (let n = 1; n < table[0].length; n++) {
      if (text1[m - 1] === text2[n - 1]) {
        table[m][n] = `${table[m - 1][n - 1]}${text1[m - 1]}`;
        if (longest.length < table[m][n].length) longest = table[m][n];
      }
    }
  }

  return longest;
}
