import { Queue } from "../../../data-structures/queue/queue";

// Using dfs inefficient
export function shortestPathBinaryMatrixV1(grid) {
  const R = grid.length;
  const C = grid[0].length;

  // Check if start or end is blocked
  if (grid[0][0] !== 0 || grid[R - 1][C - 1] !== 0) return -1;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  let minDistance = Infinity;

  const dfs = (r, c, dist) => {
    if (r === R - 1 && c === C - 1) {
      minDistance = Math.min(minDistance, dist);
      return;
    }

    grid[r][c] = 1;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (nr === R || nc === C || nr < 0 || nc < 0 || grid[nr][nc] !== 0)
        continue;

      dfs(nr, nc, dist + 1);
    }

    // Backtrack and unmark the current cell
    grid[r][c] = 0;
  };

  // Start DFS from the top-left corner
  dfs(0, 0, 1);

  return minDistance === Infinity ? -1 : minDistance;
}

// Using BFS
export function shortestPathBinaryMatrixV2(grid) {
  const R = grid.length;
  const C = grid[0].length;

  if (grid[0][0] === 1 || grid[R - 1][C - 1] == 1) return -1;

  const queue = new Queue();
  queue.enqueue([0, 0]);
  grid[0][0] = 1;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
  ];

  let distance = 1;
  while (!queue.isEmpty()) {
    for (let i = 0; i < queue.size(); i++) {
      const [r, c] = queue.dequeue();

      if (r === R - 1 && c === C - 1) return distance;

      for (const [dr, dc] of directions) {
        const [nr, nc] = [r + dr, c + dc];

        if (nr < 0 || nc < 0 || nr === R || nc === C || grid[nr][nc] === 1)
          continue;
        grid[nr][nc] = 1;
        queue.enqueue([nr, nc]);
      }
    }
    distance++;
  }
  return -1;
}

export function shortestPathBinaryMatrixV3(grid) {
  const R = grid.length;
  const C = grid[0].length;

  // if start or end point are not 0 return -1
  if (grid[0][0] !== 0 || grid[R - 1][C - 1] !== 0) return -1;

  let minDist = Infinity;

  // 8 directions
  const directions = [
    [-1, 0],
    [-1, 1],
    [-1, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [0, 1],
    [0, -1],
  ];

  const dfs = (r, c, dist) => {
    if (r < 0 || c < 0 || r === R || c === C || grid[r][c] !== 0) return;

    if (r === R - 1 && c === C - 1) {
      minDist = Math.min(minDist, dist);
      return;
    }

    grid[r][c] = 1;

    for (const [dr, dc] of directions) {
      const [nr, nc] = [dr + r, dc + c];
      dfs(nr, nc, dist + 1);
    }
    grid[r][c] = 0;
  };

  dfs(0, 0, 1);

  return minDist === Infinity ? -1 : minDist;
}

export function shortestPathBinaryMatrix(grid) {
  const R = grid.length;
  const C = grid[0].length;

  // if start or end point are not 0 return -1
  if (grid[0][0] !== 0 || grid[R - 1][C - 1] !== 0) return -1;

  // 8 directions
  const directions = [
    [-1, 0],
    [-1, 1],
    [-1, -1],
    [1, 0],
    [1, 1],
    [1, -1],
    [0, 1],
    [0, -1],
  ];

  const queue = new Queue();
  queue.enqueue([0, 0]);

  let distance = 1;
  while (!queue.isEmpty()) {
    for (let i = 0; i < queue.size(); i++) {
      const [r, c] = queue.dequeue();
      if (r < 0 || c < 0 || r === R || c === C || grid[r][c] !== 0) continue;
      if (r === R - 1 && c === C - 1) return distance;
      grid[r][c] = 1;
      for (const [dr, dc] of directions) {
        const [nr, nc] = [dr + r, dc + c];
        queue.enqueue([nr, nc]);
      }
    }
    distance++;
  }

  return -1;
}
