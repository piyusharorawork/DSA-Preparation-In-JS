function displayAllCells(mat, r = 0, c = 0) {
  const R = mat.length;
  const C = mat[0].length;

  if (r < 0 || c < 0 || r === R || c === C || mat[r][c] === -1) return; // Termination

  console.log(mat[r][c]); // Operation
  mat[r][c] = -1; // Operation

  displayAllCells(mat, r + 1, c); // Recursion
  displayAllCells(mat, r - 1, c); // Recursion
  displayAllCells(mat, r, c + 1); // Recursion
  displayAllCells(mat, r, c - 1); // Recursion
}

displayAllCells([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
