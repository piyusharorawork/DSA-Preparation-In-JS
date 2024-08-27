// Only recursive
export function uniquePathsV1(m, n) {
  const helper = (r = m - 1, c = n - 1) => {
    if (r === 0 && c == 0) {
      return 1;
    }

    if (r < 0 || c < 0) {
      return 0;
    }

    return helper(r - 1, c) + helper(r, c - 1);
  };

  return helper();
}

// Recursive with memorisation
export function uniquePathsV2(m, n) {
  const cache = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(-1));

  const helper = (r = m - 1, c = n - 1) => {
    if (r === 0 && c == 0) {
      return 1;
    }

    if (r < 0 || c < 0) {
      return 0;
    }

    if (cache[r][c] !== -1) return cache[r][c];

    const paths = helper(r - 1, c) + helper(r, c - 1);
    cache[r][c] = paths;
    return paths;
  };

  return helper();
}

// DP
export function uniquePaths(m, n) {
  const table = Array.from({ length: m }, () => new Array(n).fill(0));

  for (let r = 0; r < table.length; r++) {
    for (let c = 0; c < table[0].length; c++) {
      if (r === 0 && c === 0) table[r][c] = 1;
      else {
        const fromAbove = r === 0 ? 0 : table[r - 1][c];
        const fromLeft = c === 0 ? 0 : table[r][c - 1];
        table[r][c] = fromAbove + fromLeft;
      }
    }
  }

  return table[m - 1][n - 1];
}
