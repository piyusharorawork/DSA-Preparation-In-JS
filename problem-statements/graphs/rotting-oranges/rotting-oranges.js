import { Queue } from "../../../data-structures/queue/queue";

export function orangesRotting(grid) {
  const R = grid.length;
  const C = grid[0].length;

  let freshCount = 0;
  const queue = new Queue();

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      const value = grid[r][c];
      if (value === 1) freshCount++;
      else if (value === 2) queue.enqueue({ r, c });
    }
  }

  if (freshCount === 0) {
    return 0;
  }

  const directions = [-1, 0, 1, 0, -1];

  let days = 0;
  while (!queue.isEmpty()) {
    const count = queue.size();
    for (let i = 0; i < count; i++) {
      const { r, c } = queue.dequeue();
      for (let i = 0; i < 4; i++) {
        const nr = r + directions[i];
        const nc = c + directions[i + 1];
        if (nr < 0 || nc < 0 || nr >= R || nc >= C || grid[nr][nc] !== 1)
          continue;
        freshCount--;
        grid[nr][nc] = 2;
        queue.enqueue({ r: nr, c: nc });
      }
    }
    days++;
  }

  if (freshCount !== 0) return -1;

  return days - 1;
}
