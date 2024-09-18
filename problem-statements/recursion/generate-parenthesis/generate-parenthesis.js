export function generateParenthesisV1(n) {
  const result = [];
  const dfs = (openingCount = 0, closingCount = 0, permutation = []) => {
    if (permutation.length === 2 * n) result.push(permutation.join(""));
    else {
      // push opening
      if (openingCount < n) {
        permutation.push("(");
        dfs(openingCount + 1, closingCount, permutation);
        permutation.pop();
      }

      // push closing
      if (closingCount < n && closingCount < openingCount) {
        permutation.push(")");
        dfs(openingCount, closingCount + 1, permutation);
        permutation.pop();
      }
    }
  };
  dfs();

  return result;
}

export function generateParenthesis(n) {
  const result = [];
  const dfs = (openingCount = 0, closingCount = 0, permutation = []) => {
    if (openingCount + closingCount === 2 * n)
      result.push(permutation.join(""));
    else {
      // push opening bracket
      if (openingCount < n) {
        permutation.push("(");
        dfs(openingCount + 1, closingCount, permutation);
        permutation.pop();
      }

      // push closing bracket
      if (closingCount < n && closingCount < openingCount) {
        permutation.push(")");
        dfs(openingCount, closingCount + 1, permutation);
        permutation.pop();
      }
    }
  };

  dfs();
  return result;
}
