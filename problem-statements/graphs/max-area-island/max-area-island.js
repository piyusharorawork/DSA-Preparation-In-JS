export function maxAreaOfIsland(grid) {
  const R = grid.length;
  const C = grid[0].length;

  const area = (r, c) => {
    if (
      r < 0 ||
      c < 0 ||
      r === R ||
      c === C ||
      grid[r][c] === 0 ||
      grid[r][c] === "#"
    )
      return 0;

    grid[r][c] = "#";

    return (
      1 + area(r - 1, c) + area(r, c - 1) + area(r + 1, c) + area(r, c + 1)
    );
  };

  let result = 0;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === 1) {
        const a = area(r, c);
        result = Math.max(result, a);
      }
    }
  }

  return result;
}
