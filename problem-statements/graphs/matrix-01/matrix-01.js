import { Queue } from "../../../data-structures/queue/queue";

export function updateMatrix(mat) {
  const R = mat.length;
  const C = mat[0].length;

  const DIRECTIONS = [0, 1, 0, -1, 0];
  const ARBITRARY_VALUE = 100;
  const queue = new Queue();

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (mat[r][c] === 0) queue.enqueue({ r, c });
      else mat[r][c] = ARBITRARY_VALUE;
    }
  }

  while (!queue.isEmpty()) {
    const { r, c } = queue.dequeue();
    for (let i = 0; i < DIRECTIONS.length - 1; i++) {
      const nr = r + DIRECTIONS[i];
      const nc = c + DIRECTIONS[i + 1];

      if (
        nr < 0 ||
        nc < 0 ||
        nr >= R ||
        nc >= C ||
        mat[nr][nc] !== ARBITRARY_VALUE
      )
        continue;
      mat[nr][nc] = 1 + mat[r][c];
      queue.enqueue({ r: nr, c: nc });
    }
  }
  return mat;
}
