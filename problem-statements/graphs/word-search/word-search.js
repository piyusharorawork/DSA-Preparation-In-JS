// only recursion
export function existV1(board, word) {
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

export function exist(board, word) {
  const R = board.length;
  const C = board[0].length;

  const search = (r, c, ptr = 0) => {
    if (ptr === word.length) return true;

    if (
      r < 0 ||
      c < 0 ||
      r === R ||
      c === C ||
      board[r][c] !== word[ptr] ||
      board[r][c] === "*"
    )
      return false;

    board[r][c] = "*";
    const isFound =
      search(r - 1, c, ptr + 1) ||
      search(r, c - 1, ptr + 1) ||
      search(r + 1, c, ptr + 1) ||
      search(r, c + 1, ptr + 1);

    board[r][c] = word[ptr];

    return isFound;
  };

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (search(r, c, 0)) return true;
    }
  }

  return false;
}
