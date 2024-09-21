import { Trie } from "../../../data-structures/trie/trie";

// DP
// export function wordBreakV1(s, wordDict) {
//   const trie = new Trie();
//   for (const word of wordDict) {
//     trie.insert(word);
//   }

//   const N = s.length;
//   const dp = new Array(N + 1).fill(false);
//   dp[0] = true; // base case

//   for (let i = 1; i <= N; i++) {
//     for (let j = 0; j < i; j++) {
//       const word = s.substring(j, i);
//       if (dp[j] && trie.search(word)) {
//         dp[i] = true;
//         break;
//       }
//     }
//   }

//   return dp[N];
// }

// // ONLY reursion with trei
// export function wordBreakV2(s, wordDict) {
//   const N = s.length;

//   const helper = (n = N) => {
//     if (n === 0) return true;

//     for (let i = n - 1; i >= 0; i--) {
//       const word = s.substring(i, n);
//       if (wordDict.includes(word) && helper(i)) return true;
//     }

//     return false;
//   };

//   return helper();
// }

// export function wordBreak(s, words) {
//   const N = s.length;

//   // n represents characters in string
//   const helper = (n = N) => {
//     // if no character left
//     if (n === 0) return true;

//     // form substrings and search
//     for (let i = n - 1; i < n; i--) {
//       const word = s.substring(i, n);

//       // if word does not exist in words
//       // do point in running dfs
//       if (!words.includes(word)) {
//         continue;
//       }

//       // if word exist in words
//       // run dsf for rest of the characters
//       if (helper(n - 1)) return true;
//     }
//     return false;
//   };

//   return helper();
// }

// Not clean recursion
export function wordBreakV1(s, words) {
  const N = s.length;

  const helper = (n = N) => {
    if (n === 0) return true;

    for (let i = n - 1; i >= 0; i--) {
      const word = s.substring(i, n);

      // if word does not exist
      // keep expanding the left
      if (!words.includes(word)) {
        continue;
      }

      // Now word exist but not all characters are searched
      // Keep expading to left
      if (!helper(i)) {
        continue;
      }

      // Now word exists and no more words left
      return true;
    }

    return false;
  };

  return helper();
}

// cleaner recursion
export function wordBreakV2(s, words) {
  const N = s.length;

  const helper = (n = N) => {
    if (n === 0) return true;

    for (let i = n - 1; i >= 0; i--) {
      const word = s.substring(i, n);

      // word exists and no more words left
      if (words.includes(word) && helper(i)) return true;
    }

    return false;
  };

  return helper();
}

// Optimised word search
export function wordBreakV3(s, words) {
  const trei = new Trie();
  for (const word of words) {
    trei.insert(word);
  }

  const N = s.length;

  const helper = (n = N) => {
    if (n === 0) return true;

    for (let i = n - 1; i >= 0; i--) {
      const word = s.substring(i, n);

      // word exists and no more words left
      if (trei.search(word) && helper(i)) return true;
    }

    return false;
  };

  return helper();
}

// With memorisation
export function wordBreakV4(s, words) {
  const trei = new Trie();
  for (const word of words) {
    trei.insert(word);
  }

  const N = s.length;

  const cache = new Array(N + 1).fill(-1);

  const helper = (n = N) => {
    if (n === 0) return true;

    if (cache[n] !== -1) return cache[n];

    let res = false;

    for (let i = n - 1; i >= 0; i--) {
      const word = s.substring(i, n);

      // word exists and no more words left
      if (trei.search(word) && helper(i)) {
        res = true;
      }
    }

    cache[n] = res;
    return res;
  };

  return helper();
}
// With DP
export function wordBreakV5(s, words) {
  const trei = new Trie();
  for (const word of words) {
    trei.insert(word);
  }

  const N = s.length;

  const table = new Array(N + 1).fill(false);
  table[0] = true;

  for (let n = 1; n < table.length; n++) {
    for (let i = 0; i < n; i++) {
      const word = s.substring(i, n);
      if (trei.search(word) && table[i]) {
        table[n] = true;
      }
    }
  }

  return table[N];
}

export function wordBreak(s, words) {
  const trei = new Trie();
  for (const word of words) {
    trei.insert(word);
  }

  const N = s.length;

  const canBeFormed = (n) => {
    if (n === 0) return true;

    for (let i = n - 1; i >= 0; i--) {
      const substr = s.substring(i, n);
      const isWordFound = trei.search(substr);
      if (isWordFound && canBeFormed(i)) return true;
    }

    return false;
  };

  return canBeFormed(N);
}
