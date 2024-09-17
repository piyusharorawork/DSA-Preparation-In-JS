export function letterCasePermutation(s) {
  const N = s.length;
  const result = [];

  const isDigit = (ch) => {
    return (
      ch.charCodeAt(0) >= "0".charCodeAt(0) &&
      ch.charCodeAt(0) <= "9".charCodeAt(0)
    );
  };

  const dfs = (start = 0, permutation = []) => {
    if (start === N) result.push(permutation.join(""));
    else {
      // if digit
      if (isDigit(s[start])) {
        permutation.push(s[start]);
        dfs(start + 1, permutation);
        permutation.pop();
      } else {
        permutation.push(s[start].toLowerCase());
        dfs(start + 1, permutation);
        permutation.pop();

        permutation.push(s[start].toUpperCase());
        dfs(start + 1, permutation);
        permutation.pop();
      }
    }
  };

  dfs();

  console.log(result);

  return result;
}
