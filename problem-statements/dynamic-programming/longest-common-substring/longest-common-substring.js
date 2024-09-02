// Recursion
export function longestCommonSubstringV1(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  let result = 0;
  const helper = (m = M, n = N, length = 0) => {
    if (m === 0 || n === 0) return length;

    if (text1[m - 1] === text2[n - 1]) {
      const currentLength = helper(m - 1, n - 1, length + 1);
      result = Math.max(currentLength, result);
      return currentLength;
    }

    return Math.max(helper(m, n - 1, 0), helper(m - 1, n, 0));
  };

  helper();

  return result;
}

//DP
export function longestCommonSubstring(text1, text2) {
  const M = text1.length;
  const N = text2.length;

  let longest = 0;

  // Required to fill 0 for not equal indexes
  const table = Array.from({ length: M + 1 }, () => new Array(N + 1).fill(0));

  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table[0].length; n++) {
      if (m === 0 || n === 0) table[m][m] = 0;
      else if (text1[m - 1] === text2[n - 1]) {
        const currentLength = table[m - 1][n - 1] + 1;
        longest = Math.max(longest, currentLength);
        table[m][n] = currentLength;
      }
    }
  }

  return longest;
}

// export function longestCommonSubstring(text1, text2) {
//   const M = text1.length;
//   const N = text2.length;

//   let longest = 0;

//   const table = Array.from({ length: M + 1 }, () => new Array(N + 1));

//   for (let m = 0; m < table.length; m++) {
//     for (let n = 0; n < table[0].length; n++) {
//       if (m === 0 || n === 0) table[m][n] = 0;
//       else if (text1[m - 1] === text2[n - 1]) {
//         const currentLength = 1 + table[m - 1][n - 1];
//         result = Math.max(currentLength);
//         table[m][n] = currentLength;
//       }
//     }
//   }

//   return longest;
// }
