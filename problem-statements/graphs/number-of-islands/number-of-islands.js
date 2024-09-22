export function numIslandsV1(grid) {
  const R = grid.length;
  const C = grid[0].length;

  let result = 0;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= R || c >= C || grid[r][c] !== "1") return;
    grid[r][c] = -1;
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      const value = grid[r][c];
      if (value !== "1") continue;
      dfs(r, c);
      result++;
    }
  }

  return result;
}

export function numIslands(grid) {
  const R = grid.length;
  const C = grid[0].length;

  const fill = (r, c) => {
    if (
      r < 0 ||
      c < 0 ||
      r === R ||
      c === C ||
      grid[r][c] === "0" ||
      grid[r][c] === "#"
    )
      return;
    grid[r][c] = "#";
    fill(r + 1, c);
    fill(r, c + 1);
    fill(r - 1, c);
    fill(r, c - 1);
  };

  let result = 0;

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === "1") {
        fill(r, c);
        result++;
      }
    }
  }

  return result;
}
