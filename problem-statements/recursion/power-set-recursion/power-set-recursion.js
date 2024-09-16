export function powerSetRecursion(s) {
  const result = [];

  const dfs = (start = 0, subset = []) => {
    result.push(subset.join(""));
    for (let i = start; i < s.length; i++) {
      subset.push(s[i]);
      dfs(i + 1, subset);
      subset.pop();
    }
  };

  dfs();

  return result;
}
