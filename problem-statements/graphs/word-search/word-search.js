// only recursion
export function exist(board, word) {
  const R = board.length;
  const C = board[0].length;

  const check = (r, c, depth = 0) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= R ||
      c >= C ||
      board[r][c] !== word[depth] ||
      board[r][c] === "#"
    )
      return false;

    if (depth === word.length - 1) return true;

    const char = word[depth];
    board[r][c] = "#";
    const isFound =
      check(r + 1, c, depth + 1) ||
      check(r, c + 1, depth + 1) ||
      check(r - 1, c, depth + 1) ||
      check(r, c - 1, depth + 1);
    board[r][c] = char;
    return isFound;
  };

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      const isFound = check(r, c);
      if (isFound) return true;
    }
  }

  return false;
}
