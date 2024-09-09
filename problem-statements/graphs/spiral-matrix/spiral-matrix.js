export function spiralOrderV1(matrix) {
  const R = matrix.length;
  const C = matrix[0].length;

  const result = [];

  let top = 0;
  let left = 0;
  let bottom = R - 1;
  let right = C - 1;

  while (true) {
    // left to right
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
    top++;

    if (top > bottom) break;
    // top to bottom
    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    right--;

    if (left > right) break;

    // right to left
    for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
    bottom--;
    if (top > bottom) break;

    // bottom to top
    for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
    left++;
    if (left > right) break;
  }

  return result;
}

export function spiralOrder(matrix) {
  const R = matrix.length;
  const C = matrix[0].length;

  const result = [];
  let top = 0;
  let left = 0;
  let bottom = R - 1;
  let right = C - 1;

  while (true) {
    // top left => top right
    for (let i = left; i <= right; i++) result.push(matrix[top][i]);
    top++;
    if (top > bottom) break;

    // top right => bottom right
    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    right--;
    if (left > right) break;

    // bottom right => bottom left
    for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
    bottom--;
    if (top > bottom) break;

    // bottom left => top left
    for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
    left++;
    if (left > right) break;
  }

  return result;
}
