export function longestPalindromeV1(s) {
  const t = s.split("").reverse().join("");

  const M = s.length;

  const table = Array.from({ length: M + 1 }, () => new Array(M + 1));

  let longestLength = 0;
  let end = 0;

  for (let m = 0; m < table.length; m++) {
    for (let n = 0; n < table[0].length; n++) {
      if (m === 0 || n === 0) table[m][n] = 0;
      else if (s[m - 1] === t[n - 1]) {
        table[m][n] = 1 + table[m - 1][n - 1];

        // if it is a palindrome in the original string
        if (m - table[m][n] === M - n) {
          // Maximise the length
          if (table[m][n] > longestLength) {
            longestLength = table[m][n];
            end = m - 1;
          }
        }
      } else table[m][n] = 0;
    }
  }

  return s.substring(end - longestLength + 1, end + 1);
}

export function longestPalindromeV2(s) {
  const M = s.length;
  const t = s.split("").reverse().join("");

  const table = Array.from({ length: M + 1 }, () => new Array(M + 1).fill(0));

  let end = 0;
  let maxLen = 0;

  for (let m = 1; m < table.length; m++) {
    for (let n = 1; n < table[0].length; n++) {
      if (s[m - 1] === t[n - 1]) {
        table[m][n] = 1 + table[m - 1][n - 1];

        // if the original string is palidromic
        if (m - table[m][n] === M - n) {
          // maximise the len
          if (maxLen < table[m][n]) {
            maxLen = table[m][n];
            end = m - 1;
          }
        }
      }
    }
  }

  return s.substring(end - maxLen + 1, end + 1);
}

// cleaner
export function longestPalindromeV3(s) {
  const M = s.length;
  const t = s.split("").reverse().join("");

  const table = Array.from({ length: M + 1 }, () => new Array(M + 1).fill(0));

  let end = 0;
  let maxLen = 0;

  for (let m = 1; m < table.length; m++) {
    for (let n = 1; n < table[0].length; n++) {
      if (s[m - 1] !== t[n - 1]) continue;
      table[m][n] = 1 + table[m - 1][n - 1];

      // if the original string is not palidromic

      if (m - table[m][n] !== M - n) continue;

      // if the maxLen is already big
      if (maxLen >= table[m][n]) continue;

      // maximise the len
      maxLen = table[m][n];
      end = m - 1;
    }
  }

  return s.substring(end - maxLen + 1, end + 1);
}

//using helper
export function longestPalindrome(s) {
  const M = s.length;

  let maxStr = "";

  const helper = (left, right) => {
    let str = "";
    while (left >= 0 && right < M && s[left] === s[right]) {
      str = s.substring(left, right + 1);
      left--;
      right++;
    }

    if (maxStr.length < str.length) maxStr = str;
  };

  for (let i = 0; i < M; i++) {
    helper(i, i + 1);
    helper(i, i);
  }

  return maxStr;
}
