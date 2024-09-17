export function permutationWithSpacesV1(s) {
  const N = s.length;
  const result = [];

  const dfs = (start = 0, permutation = []) => {
    if (start === N) {
      result.push(permutation.join(""));
      return;
    }

    // Without space
    permutation.push(s[start]);
    dfs(start + 1, permutation);
    permutation.pop();

    // With space (only add if we haven't reached the last character)
    if (start < N - 1) {
      permutation.push(s[start]);
      permutation.push(" ");
      dfs(start + 1, permutation);
      permutation.pop();
      permutation.pop(); // remove both the character and the space
    }
  };

  dfs();

  return result;
}

export function permutationWithSpaces(s) {
  const N = s.length;
  const result = [];

  const dfs = (start = 0, permutation = []) => {
    if (start === N) result.push(permutation.join(""));
    else {
      // insert without space
      permutation.push(s[start]);
      dfs(start + 1, permutation); // we cannot reuse same index
      permutation.pop();

      // insert with space
      if (start < N - 1) {
        permutation.push(s[start]);
        permutation.push(" ");
        dfs(start + 1, permutation); // we cannot reuse same index
        permutation.pop();
        permutation.pop();
      }
    }
  };

  dfs();
  return result;
}
